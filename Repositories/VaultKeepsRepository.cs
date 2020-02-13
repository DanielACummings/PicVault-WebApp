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

    internal VaultKeep GetByIds(int vaultId, int keepId)
    {
      string sql = "SELECT * FROM vaultKeeps WHERE vaultId = @vaultId AND keepId = @keepId";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { vaultId, keepId });
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

    internal void Delete(int vaultId, int keepId)
    {
      string sql = @"DELETE FROM vaultkeeps
      WHERE(vaultId = @vaultId AND keepId = @keepId)";
      _db.Execute(sql, new { vaultId, keepId });
    }
  }
}