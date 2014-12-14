/**
 * HomeController
 *
 * @description :: Server-side logic for managing application. Load all schema
 * here
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  /**
   * @method index
   * @param req {Request}
   * @param res {Response}
   * @param next {Function} Skip this method, and go to the next action requested
   * @description Put all information needed for index page. Default routing
   * (other than AJAX) will also redirects here since it's a single page application
   */
  index:function(req,res,next){
    if(!req.wantsJSON){
      return res.view('homepage.ejs');
    }
    return next(); // since this is a catch-all controller, filter out the ajax requests
  },

  /**
   * @method select
   * @description Select and list model based on post parameters
   */
  select:function(req,res,next){
    var model = sails.models[req.params['model']];
    var conditions = req.body['conditions'];
    model.find(conditions).exec(function(err,records){
      res.json(err ? {errors:err} : records);
    });
  }
};

