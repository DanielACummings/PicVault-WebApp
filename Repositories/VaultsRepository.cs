using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Vault> Get()
    {
      string sql = "SELECT * FROM Vaults WHERE isPrivate = 0;";
      return _db.Query<Vault>(sql);
    }

    internal int Create(Vault VaultData)
    {
      throw new NotImplementedException();
    }
  }
}