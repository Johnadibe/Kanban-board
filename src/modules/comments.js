class comment {
    constructor (id,name,comment) {
        this.id = id;
        this.name = name;
        this.comment = comment ;
    }

     sendData = async (data) => {
        const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/h8BP3W6m1O3XvqYPoI4N/comments';
        const parameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        await fetch(postUrl, parameters);
      };
}