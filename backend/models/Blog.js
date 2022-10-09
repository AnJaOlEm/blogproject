//implementera

export default class Blog {
    constructor(title, tag, ingress, post) {
        this.title = title;
        this.tag = tag;
        this.ingress = ingress;
        this.post = post;
    }

    static convert(row) {
        return {
            title: row.title,
            tag: row.tag,
            ingress: row.ingress,
            post: row.post
        }

    }
}

//kom ihåg
// module.exports = Blog;