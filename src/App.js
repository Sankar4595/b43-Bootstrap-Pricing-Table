import './App.css';

function App() {
  return (
    <div className="App">
      <div className="child1">
        <BootstrapCard
          membership = "FREE" price="$0" period="/month"
          access1="✔" numberOfUsers=" Single User"
          access2="✔" storage=" 5GB Storage"
          access3="✔" projects=" Unlimited public projects"
          access4="✔" community=" Community Access"
          access5="✖" privateProject=" Unlimited Private Projects"
          access6="✖" phoneSupport=" Dedicated phone Support"
          access7="✖" subdomain=" Free Subdomain"
          access8="✖" statusReport=" Monthly Status Reports"
        />
      </div>
      <div className="child2">
        <BootstrapCard
          membership = "PLUS" price="$9" period="/month"
          access1="✔" numberOfUsers=" 5 User"
          access2="✔" storage=" 50GB Storage"
          access3="✔" projects=" Unlimited public projects"
          access4="✔" community=" Community Access"
          access5="✔" privateProject=" Unlimited Private Projects"
          access6="✔" phoneSupport=" Dedicated phone Support"
          access7="✔" subdomain=" Free Subdomain"
          access8="✖" statusReport=" Monthly Status Reports"
        />
      </div>
      <div className="child3">
        <BootstrapCard
          membership = "PRO" price="$49" period="/month"
          access1="✔" numberOfUsers=" Unlimited User"
          access2="✔" storage=" 150GB Storage"
          access3="✔" projects=" Unlimited public projects"
          access4="✔" community=" Community Access"
          access5="✔" privateProject=" Unlimited Private Projects"
          access6="✔" phoneSupport=" Dedicated phone Support"
          access7="✔" subdomain=" Unlimited Subdomain"
          access8="✔" statusReport=" Monthly Status Reports"
        />
      </div>
    </div>
  );
}

export default App;

function BootstrapCard(ele){
  return(
    
    <div className="card">
      <div className="parent1">
        <h6>{ele.membership}</h6>
        <h1>{ele.price}<span className="period">{ele.period}</span></h1>
      </div>
      <hr></hr>
      <div className="parent2">
        <p><span>{ele.access1}</span>{ele.numberOfUsers}</p>
        <p><span>{ele.access2}</span>{ele.storage}</p>
        <p><span>{ele.access3}</span>{ele.projects}</p>
        <p><span>{ele.access4}</span>{ele.community}</p>
        <p><span>{ele.access5}</span>{ele.privateProject}</p>
        <p><span>{ele.access6}</span>{ele.phoneSupport}</p>
        <p><span>{ele.access7}</span>{ele.subdomain}</p>
        <p><span>{ele.access8}</span>{ele.statusReport}</p>
      </div>
      <button>BUTTON</button>
      
    </div>
  )
}