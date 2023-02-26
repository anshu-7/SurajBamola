import './Pf.css'
import NavBar from '../../utils/NavBar';
function Pf() {
    return (
      <div className="pf">
      <NavBar/>
        <div>
            <h1>Employee's Provident Fund (EPFO)</h1>
        </div>
        <div className="details">
        <h3>Employee's Provident Fund organization (EPFO)</h3>
            <p>EPFO or PF is an arrangement made by the government and managed by Employee’s Provident Fund Organization
             (EPFO), which is covered under the Employees’ Provident Fund and Miscellaneous Provisions Act, 1952.
              The EPF organization is controlled by Ministry of Labour and Employment, Government of India. 
              The Act was framed to provide the benefits to salaried class employees.
               Under this act, the employees are entitled to receive a pension, 
               insurance or special benefits at specific occasions by contributing a nominal amount towards this fund.
                The contribution is being deposited from applicable for both employee and employer.</p>
        </div>

        <div className="details">
        <h3>Online EPF Registration</h3>
            <p>Filling up of form<br/>
Submission of Documents<br/>
Application Submission to the EPFO and it’s done.</p>
        </div>

        <div className="details">
        <h3>Benefits of PF</h3>
            <p>Earlier this registration was being done manually by visiting the organization. But now it can be easily done online. An important investment plan for future needs has been made mandatory by the government for the employees drawing a basic salary less than Rs. 15000/-. The fund accumulated would be tax-free and if withdrawal is being made after 5 years of registration then the maturity amount with interest will also be treated as the tax-free income. The contribution also helps employees by facilitating to withdrawal partial amount for expenses like house construction, daughter’s wedding, in the case of critical illness, higher education etc. Thus, it is very important to contribute towards this fund for both employer and employee.</p>
        </div>

        <div className="details">
        <h3>Last Date of EPF Payment</h3>
          <p>Deposition of EPF contributions due date is 15th of every month.</p>
        </div>
      </div>
    );
  }
  
  export default Pf;