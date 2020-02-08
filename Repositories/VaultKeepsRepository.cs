using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<VaultKeep> Get()
    {
      string sql = "SELECT * FROM VaultKeeps WHERE isPrivate = 0;";
      return _db.Query<VaultKeep>(sql);
    }

    internal int Create(VaultKeep VaultKeepData)
    {
      throw new NotImplementedException();
    }
  }
}