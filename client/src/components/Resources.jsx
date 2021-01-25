import React from "react";

function Resources() {
  return (
    <div className="resources">
      <h1>Mental Health Resources</h1>
      <p>
        Sourced from:
        <a href="https://www.mentalhealthfirstaid.org/mental-health-resources/">
          {" "}
          Mental Health First Aid National Council for Behavioral Health{" "}
        </a>
      </p>
      <h2>
        If you or someone you know is experiencing a mental health or substance
        use problem, there are several resources available to find out more
        information or get connected with help. Check out some mental health
        resources below:
      </h2>
      <p>
        If you or someone you know is in crisis, contact the Suicide Prevention
        Lifeline at 1-800-273-TALK (8255), or dial 911 in case of emergency.
      </p>
      <h3>General Mental Health Resources:</h3>
      <ul>
        <li>
          <a
            href="https://www.mhanational.org/?gclid=CjwKCAiAr6-ABhAfEiwADO4sfXBVi76MBuHNnAosBRHDHH9bB8BIFKkzKADxnu0Fq5I9K4AD_NikohoCFUYQAvD_BwE"
            target="_blank"
          >
            {" "}
            Mental Health America
          </a>
        </li>
        <li>
          <a
            href="https://www.thenationalcouncil.org/ccbhc-success-center/events/?gclid=CjwKCAiAr6-ABhAfEiwADO4sfZJLozhMHLjaCqOKQ-1y9lhgv0VtEtCKFtnf02-TTOauyXP5FIGcGhoCCBgQAvD_BwE"
            target="_blank"
          >
            {" "}
            National Council for Behavioral Health{" "}
          </a>
        </li>
        <li>
          <a href="https://power2u.org/" target="_blank">
            {" "}
            National Empowerment Center{" "}
          </a>
        </li>
        <li>
          <a href="https://www.nimh.nih.gov/index.shtml" target="_blank">
            National Institute of Mental Health{" "}
          </a>
        </li>
        <li>
          <a
            href="https://ps.psychiatryonline.org/doi/full/10.1176/appi.ps.54.11.1467"
            target="_blank"
          >
            {" "}
            President's New Freedom Commission on Mental Health
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;
