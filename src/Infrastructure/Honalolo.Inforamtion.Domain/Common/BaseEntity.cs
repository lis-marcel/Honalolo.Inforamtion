using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Honalolo.Inforamtion.Domain.Common
{
    public abstract class BaseEntity
    {
        public int Id { get; set; } // Primary Key for all tables
    }
}
