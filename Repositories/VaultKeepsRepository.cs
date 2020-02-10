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

    internal VaultKeep GetById(int id)
    {
      string sql = "SELECT * FROM vaultKeeps WHERE id = @id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }

    internal VaultKeep Create(VaultKeep newData)
    {
      string sql = @"INSERT INTO vaultKeeps (userId, keepId, vaultId)
      VALUES (@UserId, @KeepId, @VaultId);
      SELECT LAST_INSERT_ID();";
      int id = _db.ExecuteScalar<int>(sql, newData);
      newData.Id = id;
      return newData;
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM vaultKeeps WHERE id = @id;";
      _db.Execute(sql, new { id });
    }
  }
}