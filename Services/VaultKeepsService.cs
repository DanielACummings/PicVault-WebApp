using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _vkRepo;
    private readonly
    KeepsRepository _kRepo;

    public VaultKeepsService(VaultKeepsRepository vkRepo, KeepsRepository kRepo)
    {
      _vkRepo = vkRepo;
      _kRepo = kRepo;
    }

    // passes to KeepsRepository
    public IEnumerable<Keep> GetByVaultId(int vaultId, string userId)
    {
      var exists = _kRepo.GetByVaultId(vaultId, userId);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      return exists;
    }

    public VaultKeep Create(VaultKeep newVaultKeep)
    {
      var exists = _vkRepo.GetByIds(newVaultKeep.VaultId, newVaultKeep.KeepId);
      if (exists != null)
      {
        throw new Exception("Pic already in vault");
      }
      _vkRepo.Create(newVaultKeep);
      return newVaultKeep;
    }

    internal string Delete(int vaultId, int keepId, string userId)
    {
      var exists = _vkRepo.GetByIds(vaultId, keepId);
      if (exists == null)
      {
        throw new Exception("Invalid ID");
      }
      if (exists.UserId != userId)
      {
        throw new Exception("Only creators of an item can delete it");
      }
      _vkRepo.Delete(vaultId, keepId);
      return "Successfully deleted";
    }
  }
}