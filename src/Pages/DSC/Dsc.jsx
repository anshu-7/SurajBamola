import './Dsc.css'
import NavBar from '../../utils/NavBar';
function Dsc() {
    return (
      <div className="pf">
      <NavBar/>
        <div>
            <h1>Definition of Digital Signature (DSC)</h1>
        </div>
        <div className="details">
        <h3>Digital Signature Certificate</h3>
         <p>Digital Signature Certificate (DSC) is a physical signature in an electronic format. Digital Signatures are used in India for online transactions such as Income Tax E-Filing, Filing Annual Return, Company or LLP Incorporation, E-Tenders, many more. There are 3 types of Digital Signatures like Class-I and Class-III Digital Signatures/ DSC Registration Haldia.</p>
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
  
  export default Dsc;