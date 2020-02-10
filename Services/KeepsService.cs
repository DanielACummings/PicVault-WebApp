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

    public Keep GetById(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      return exists;
    }

    public Keep Create(Keep newData)
    {
      newData.Id = _repo.Create(newData);
      return newData;
    }

    internal Keep Delete(string userId, int id)
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