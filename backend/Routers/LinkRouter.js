class LinkRouter {
    constructor(linkService, express) {
      this.linkService = linkService;
      this.express = express;
    }

    router() {
      let router = this.express.Router();
      router.get("/", this.get.bind(this));
      router.post("/", this.post.bind(this));
    //   router.put("/update-pwd", this.put.bind(this));
      router.delete("/:id", this.delete.bind(this));
      return router;
    }
    //Get list all Link  
    async get(req, res) {
        try {
            const listlink = await this.linkService.list()
            res.json({data: listlink});
        } catch (error) {
            res.status(500).send(error)
        }
    }
    //Post Link 
    async post (req, res) {
        // let req.body.link = {title: "", url: ""}
        try { 
            const postlink = await this.linkService.addLink(
                req.body.title,
                req.body.URL_link);
            res.redirect('/'); 
        } catch (error) {
            res.status(500).send(error)
        }
    }
    //Del Link 
    async delete(req, res) {

        try {
            const delLink = await this.linkService.removelink(req.params.id)
            res.json(delLink);
        } catch (error) {
            res.status(500).send(error)
        }

    }
}

module.exports = LinkRouter
