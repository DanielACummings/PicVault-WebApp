using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    // for getting Keeps by vaultId - called from  VaultKeepsService
    internal IEnumerable<Keep> GetByVaultId(int vaultId, string userId)
    {
      string sql = @"SELECT k.* FROM vaultkeeps vk
      INNER JOIN keeps k ON k.id = vk.keepId
      WHERE(vaultId = @vaultId AND vk.userId = @userId)";
      return _db.Query<Keep>(sql, new { vaultId, userId });
    }

    internal IEnumerable<Keep> Get()
    {
      string sql = "SELECT * FROM Keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }

    internal IEnumerable<Keep> GetCreated(string userId)
    {
      string sql = "SELECT * FROM Keeps WHERE userId = @userId;";
      return _db.Query<Keep>(sql, new { userId });
    }

    internal Keep GetById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }

    internal Keep Create(Keep newData)
    {
      string sql = @"
          INSERT INTO keeps (name, description, userId, img, isPrivate)
          VALUES (@Name, @Description, @UserId, @Img, @IsPrivate);
          SELECT LAST_INSERT_ID();";
      int id = _db.ExecuteScalar<int>(sql, newData);
      newData.Id = id;
      return newData;
    }

    internal Keep Edit(Keep update)
    {
      string sql = @"UPDATE keeps
      SET id = @Id, name = @Name, description = @Description, views = @Views, shares = @Shares, keeps = @Keeps
      WHERE id = @Id";
      _db.Execute(sql, update);
      return update;
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM keeps WHERE id = @id";
      _db.Execute(sql, new { id });
    }
  }
}