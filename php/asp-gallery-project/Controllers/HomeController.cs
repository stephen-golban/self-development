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
    public class HomeController : Controller
    {
        kingdomEntities db = new kingdomEntities();

        public ActionResult Index()
        {
            ViewBag.Projects = db.Projects;
            ViewBag.Languages = db.Languages;
            return View();
        }

        [HttpGet]
        public ActionResult Details(int id)
        {
            return View(db.Projects.Where(x => x.ProjectId == id).FirstOrDefault());
        }

        // GET: Computers/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Computers/Create
        [HttpPost]
        public ActionResult Create(Project project)
        {
            try
            {
                string fileName = Path.GetFileNameWithoutExtension(project.ImagePath.FileName);
                string extension = Path.GetExtension(project.ImagePath.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                project.ProjectImage = "~/Images/" + fileName;
                fileName = Path.Combine(Server.MapPath("~/Images/"), fileName);
                project.ImagePath.SaveAs(fileName);
                db.Projects.Add(project);
                db.SaveChanges();
                return RedirectToAction("Index");
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
            return View(db.Projects.Where(x => x.ProjectId == id).FirstOrDefault());
        }

        // POST: Apartament/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, Project project)
        {
            try
            {
                string fileName = Path.GetFileNameWithoutExtension(project.ImagePath.FileName);
                string extension = Path.GetExtension(project.ImagePath.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                project.ProjectImage = "~/Images/" + fileName;
                fileName = Path.Combine(Server.MapPath("~/Images/"), fileName);
                project.ImagePath.SaveAs(fileName);
                db.Entry(project).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
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
            return View(db.Projects.Where(x => x.ProjectId == id).FirstOrDefault());
        }

        // POST: Apartament/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, Project project)
        {
            try
            {
                project = db.Projects.Where(x => x.ProjectId == id).FirstOrDefault();
                db.Projects.Remove(project);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}