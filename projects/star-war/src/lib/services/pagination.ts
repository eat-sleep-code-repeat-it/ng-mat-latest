/*

  public getPeoplePagination(url?: string){

    if(url){
      return this.http.get<PeopleResponse>(url,{ observe: 'response' })
      .pipe(
        tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.http.get<PeopleResponse>(`${this.apiUrl}/people/`, { observe: 'response' })
    .pipe(
      tap(res => {
        this.retrieve_pagination_links(res); 
      })
    );
  }

  public retrieve_pagination_links(response){
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage =  linkHeader["last"];
    this.prevPage =  linkHeader["prev"];
    this.nextPage =  linkHeader["next"];
  }
  parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    }); 
    return links;
  }
}

*