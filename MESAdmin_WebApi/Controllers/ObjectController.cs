using BLL;
using BO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Leprino_Integration_Tool.Controllers
{
    public class ObjectController : ApiController
    {
        //// GET: api/Object/id
        //[HttpGet]
        //[Route("api/Object/{id}")]




        //// GET: api/Object/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Object
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Object/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Object/5
        //public void Delete(int id)
        //{
        //}
        // GET: api/Object/id
        [HttpGet]
        [Route("api/Object/{id}")]
        public string Get(string id) //MessageCollection<List> 
        {
            MessageGenerator mg = new MessageGenerator();
            return mg.GetXMLContent(id);
        }


        [HttpPut]
        [Route("api/savexml")]
        public IHttpActionResult Savexml(JObject xmlcon)
        {
            JObject myResult = xmlcon;
            string xml = myResult["xml"].ToString();
            string objectid = myResult["objectid"].ToString();

            if (objectid != null)
            {
                MessageGenerator mg1 = new MessageGenerator();
                mg1.saveXML(xml, objectid);
                return Ok();
            }
            else
                return NotFound();
        }

        // GET: api/Object/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Object
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Object/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Object/5
        public void Delete(int id)
        {
        }


    }
}
