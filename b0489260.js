import{$ as e,u as t,r as a,_ as n,n as s}from"./6e94d07b.js";import{P as o,s as r,u as c,r as d}from"./941b2a34.js";const l={title:"Error: Page not found",description:null,image:null};class i extends o{connectedCallback(){super.connectedCallback(),r("name","render:status_code","404"),c({...this.defaultMeta,...l})}disconnectedCallback(){d("name","render:status_code"),super.disconnectedCallback()}}let u=class extends i{render(){return e`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="${t("home")}">Back to home</a>
        </p>
      </section>
    `}meta(){return l}};u.styles=a`
    :host {
      display: block;
    }

    section {
      padding: 1rem;
      text-align: center;
    }
  `,u=n([s("page-not-found")],u);export{u as PageNotFound};
