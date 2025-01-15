using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MonterrosaDC3RockPaperScissorsLizardSpock_PrototypeAndEndpoint.Services;

namespace MonterrosaDC3RockPaperScissorsLizardSpock_PrototypeAndEndpoint.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RPSLSGameController : ControllerBase
    {
        private readonly RPSLSGameServices _rPSLSGameServices;
        public RPSLSGameController(RPSLSGameServices rPSLSGameServices)
        {
            _rPSLSGameServices = rPSLSGameServices;
        }

        [HttpGet]
        [Route("Play")]
        public string GetCPUMove()
        {
            return _rPSLSGameServices.GetCPUMove();
        }
    }
}