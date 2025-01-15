using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonterrosaDC3RockPaperScissorsLizardSpock_PrototypeAndEndpoint.Services
{
    public class RPSLSGameServices
    {
        public string GetCPUMove()
        {
            string[] possibleMove = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
            Random rng = new Random();
            int moveNumber = rng.Next(0, 5);
            return possibleMove[moveNumber];
        }
    }
}