using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<Vault> Get()
    {
      return _repo.Get();
    }

    internal Vault GetById(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      return exists;
    }

    public Vault Create(Vault newVault)
    {
      _repo.Create(newVault);
      return newVault;
    }

    internal string Delete(string userId, int id)
    {
      {
        var exists = _repo.GetById(id);
        if (exists == null)
        {
          throw new Exception("Invalid Id");
        }
        if (exists.UserId != userId)
        {
          throw new Exception("Only the creator of a vault can delete it");
        }
        _repo.Delete(id);
        return "Successfully deleted";
      }
    }
  }
}