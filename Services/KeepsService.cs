using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    public IEnumerable<Keep> GetCreated(string userId)
    {
      return _repo.GetCreated(userId);
    }

    public Keep GetById(int id, string userId)
    {
      var exists = _repo.GetById(id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      if (exists.IsPrivate == true && userId != exists.UserId)
      {
        throw new Exception("Cannot accesss. This keep is private.");
      }
      return exists;
    }

    public Keep Create(Keep newData)
    {
      _repo.Create(newData);
      return newData;
    }

    internal Keep Edit(Keep update)
    {
      var exists = _repo.GetById(update.Id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      _repo.Edit(update);
      return update;
    }

    internal string Delete(string userId, int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      if (exists.UserId != userId)
      {
        throw new Exception("Only the creator of a keep can delete it");
      }
      _repo.Delete(id);
      return "Successfully deleted";
    }

  }
}