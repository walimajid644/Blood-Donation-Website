import React from 'react'
import { useSearchParams } from "react-router-dom"
import "./SearchPage.css"
import donors from "../../data"
import Profilecard from '../../component/profilecard/Profilecard'

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const bloodQuery = searchParams.get("blood") || "";
  const cityQuery = searchParams.get("city") || "";

  const handleParamChange = (param, value) => {
    const newParams = {};
    if (bloodQuery) newParams.blood = bloodQuery;
    if (cityQuery) newParams.city = cityQuery;

    newParams[param] = value;
    setSearchParams(newParams);
  };

  const filteredResults = donors.filter((donor) =>
    donor.Bloodgroup.toLowerCase().includes(bloodQuery.trim().toLowerCase()) &&
    donor.city.toLowerCase().includes(cityQuery.trim().toLowerCase())
  );


  return (
    <>
      <h2 className='h2-results'>Search Donors By Blood Group</h2>
      <div className='searchbar'>
        <input type="text" list='bloodgroups' placeholder='Search or Type Your Blood Group....' value={bloodQuery}
          onChange={(e) => setSearchParams({ blood: e.target.value })} />
        <datalist id='bloodgroups'>
          <option value="O+"></option>
          <option value="A+"></option>
          <option value="B+"></option>
          <option value="AB+"></option>
          <option value="O-"></option>
          <option value="A-"></option>
          <option value="B-"></option>
          <option value="AB-"></option>
        </datalist>
        <input
          type="text"
          list="cities"
          placeholder="Type City..."
          value={cityQuery}
          onChange={(e) => handleParamChange("city", e.target.value)}
        />
        <datalist id="cities">
          <option value="Karachi" />
          <option value="Lahore" />
          <option value="Islamabad" />
          <option value="Rawalpindi" />
          <option value="Faisalabad" />
          <option value="Multan" />
          <option value="Peshawar" />
          <option value="Quetta" />
          <option value="Hyderabad" />
          <option value="Sialkot" />
          <option value="Gujranwala" />
          <option value="Bahawalpur" />
          <option value="Sukkur" />
          <option value="Sargodha" />
          <option value="Larkana" />
          <option value="Sheikhupura" />
          <option value="Jhang" />
          <option value="Dera Ghazi Khan" />
          <option value="Mardan" />
          <option value="Abbottabad" />
          <option value="Mirpur" />
          <option value="Okara" />
          <option value="Rahim Yar Khan" />
          <option value="Kasur" />
          <option value="Chiniot" />
          <option value="Gujrat" />
          <option value="Sahiwal" />
          <option value="Toba Tek Singh" />
          <option value="Nawabshah" />
          <option value="Burewala" />
          <option value="Muzaffargarh" />
          <option value="Kotli" />
          <option value="Jacobabad" />
          <option value="Hafizabad" />
          <option value="Vehari" />
          <option value="Swat" />
          <option value="Jhelum" />
          <option value="Khanewal" />
          <option value="Khairpur" />
          <option value="Dera Ismail Khan" />
          <option value="Bhakkar" />
          <option value="Gojra" />
          <option value="Layyah" />
          <option value="Kamalia" />
          <option value="Mianwali" />
          <option value="Mingora" />
          <option value="Shikarpur" />
          <option value="Chaman" />
          <option value="Nowshera" />
          <option value="Khuzdar" />
        </datalist>


      </div>
      <div className='searchpage'>
        {
          filteredResults.length > 0 ? (
            filteredResults.map(donor => (
              <Profilecard key={donor.id} data={donor} />
            ))
          ) : (<p>No donors found</p>)
        }
      </div>
    </>
  );
};

export default SearchPage;