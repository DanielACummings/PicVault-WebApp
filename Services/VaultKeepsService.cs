using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<VaultKeep> Get()
    {
      return _repo.Get();
    }

    internal VaultKeep GetById(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      return exists;
    }

    public VaultKeep Create(VaultKeep newVaultKeep)
    {
      _repo.Create(newVaultKeep);
      return newVaultKeep;
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
        throw new Exception("Only creators of an item can delete it");
      }
      _repo.Delete(id);
      return "Successfully deleted";
    }
  }
}