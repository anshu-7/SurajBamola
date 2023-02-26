import './Esic.css'
import NavBar from '../../utils/NavBar';
function Esic() {
    return (
      <div className="pf">
      <NavBar/>
        <div>
            <h1>Employee's State Insurance Corporation (ESIC)</h1>
        </div>
        <div className="details">
        <h3>ESI Registration</h3>
            <p>ESIC Registration is applicable to the establishments which in an implemented area and having more than 10 employees. Once, the organization gets registered, a 17 digit unique identification code will be allotted to them. It is the statutory responsibility of the employer to get registered under this act after achieving the said employee level within 15 days.</p>
        </div>

        <div className="details">
        <h3>Benefits of ESI</h3>
            <p>Provides complete medical assistance to the employee<br/>
            It also includes dependents
            <br/>
            These benefits can be availed at different ESI dispensaries, clinics and hospitals
            <br/>
            Any payment made at hospital is completely reimbursable
            </p>
        </div>

        <div className="details">
        <h3>ESI Contribution</h3>
            <p>ESIC contribution is must to be made by the employer for all employees drawing a monthly gross salary of up to Rs.21,000 per month. The employer contribution is 4.75% and employee contribution is 1.75% of the wages. The total contribution made towards ESI Fund will be 6.50% of total monthly gross.</p></div>

      </div>
    );
  }
  
  export default Esic;