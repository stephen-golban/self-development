using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using CRUD.Models;
using System.IO;

namespace CRUD.Controllers
{
    public class LanguageController : Controller
    {
        kingdomEntities db = new kingdomEntities();
        public ActionResult Details(int id)
        {
            return View(db.Languages.Where(x => x.LanguageId == id).FirstOrDefault());
        }

        // GET: Computers/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Computers/Create
        [HttpPost]
        public ActionResult Create(Language language)
        {
            try
            {
                string fileName = Path.GetFileNameWithoutExtension(language.ImagePath.FileName);
                string extension = Path.GetExtension(language.ImagePath.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                language.LanguageImage = "~/Images/" + fileName;
                fileName = Path.Combine(Server.MapPath("~/Images/"), fileName);
                language.ImagePath.SaveAs(fileName);
                db.Languages.Add(language);
                db.SaveChanges();
                return RedirectToAction("../Home/Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Computers/Edit/5
        [HttpGet]

        public ActionResult Edit(int id)
        {
            return View(db.Languages.Where(x => x.LanguageId == id).FirstOrDefault());
        }

        // POST: Apartament/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, Language language)
        {
            try
            {
                string fileName = Path.GetFileNameWithoutExtension(language.ImagePath.FileName);
                string extension = Path.GetExtension(language.ImagePath.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                language.LanguageImage = "~/Images/" + fileName;
                fileName = Path.Combine(Server.MapPath("~/Images/"), fileName);
                language.ImagePath.SaveAs(fileName);
                db.Languages.Add(language);
                db.Entry(language).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("../Home/Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Apartament/Delete/5
        [HttpGet]

        public ActionResult Delete(int id)
        {
            return View(db.Languages.Where(x => x.LanguageId == id).FirstOrDefault());
        }

        // POST: Apartament/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, Language language)
        {
            try
            {
                language = db.Languages.Where(x => x.LanguageId == id).FirstOrDefault();
                db.Languages.Remove(language);
                db.SaveChanges();

                return RedirectToAction("../Home/Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
