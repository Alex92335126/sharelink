class LinkService {
    constructor(knex) {
      this.knex = knex;
    }
  
    //list all share_link
    async list() {
      console.log("list_link");
  
      const event = await this.knex("share_link").select("*");
  
      // console.log("link_service", event);
      return event;
    }

    //post a new link 

    async addLink(
        newTitle, 
        newURL_link
    ) {
        const data = await this.knex("share_link").insert({
            title : newTitle,
            URL_link: newURL_link,
        }) 
    return data
    }   

    // Delete a link 

    async removelink (id) {
        return await this.knex("share_link").del("id").where({id});
    }
}

module.exports = LinkService
