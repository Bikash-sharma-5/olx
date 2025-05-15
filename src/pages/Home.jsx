// // src/pages/Home.js

// export default function Home() {
//     return (
//       <main
//         id="main_content"
//         style={{
//           fontFamily: "Arial, sans-serif",
//           padding: "20px",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "800px",
//             margin: "auto",
//             background: "white",
//             padding: "30px",
//             borderRadius: "8px",
//             boxShadow: "0 0 10px #ddd",
//           }}
//         >
//           <h1 style={{ fontSize: "28px", color: "#002f34", marginBottom: "20px" }}>
//             Post your Ad
//           </h1>

//           {/* Selected Category */}
//           <div style={{ marginBottom: "30px" }}>
//             <h2 style={{ fontSize: "20px", color: "#002f34", marginBottom: "10px" }}>
//               Selected category
//             </h2>
//             <div>
//               <ol
//                 style={{
//                   paddingLeft: 0,
//                   listStyle: "none",
//                   display: "flex",
//                   gap: "5px",
//                 }}
//               >
//                 <li>
//                   <a
//                     href="/post/attributes"
//                     style={{ color: "#007bff", textDecoration: "none" }}
//                   >
//                     Properties
//                   </a>{" "}
//                   /
//                 </li>
//                 <li>
//                   <a
//                     href="/post/attributes"
//                     style={{ color: "#007bff", textDecoration: "none" }}
//                   >
//                     For Rent: Houses & Apartments
//                   </a>
//                 </li>
//               </ol>
//               <button
//                 type="button"
//                 style={{
//                   padding: "8px 16px",
//                   marginTop: "10px",
//                   backgroundColor: "#002f34",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Change
//               </button>
//             </div>
//           </div>

//           {/* Include some details */}
//           <div style={{ marginBottom: "30px" }}>
//             <h2 style={{ fontSize: "20px", color: "#002f34" }}>
//               Include some details
//             </h2>

//             {/* Type */}
//             <div style={{ marginBottom: "20px" }}>
//               <label>Type *</label>
//               <br />
//               {["Flats / Apartments", "Independent / Builder Floors", "Individual House / Villa"].map((val) => (
//                 <button key={val} style={{ margin: "5px", padding: "8px 14px" }}>
//                   {val}
//                 </button>
//               ))}
//             </div>

//             {/* BHK */}
//             <div style={{ marginBottom: "20px" }}>
//               <label>BHK</label>
//               <br />
//               {[1, 2, 3, 4, "4+"].map((val) => (
//                 <button key={val} style={{ margin: "5px", padding: "8px 14px" }}>
//                   {val}
//                 </button>
//               ))}
//             </div>

//             {/* Bathrooms */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>
//                 Bathrooms
//               </label>
//               {[1, 2, 3, 4, "4+"].map((val) => (
//                 <button key={val} style={{ margin: "5px", padding: "8px 14px" }}>
//                   {val}
//                 </button>
//               ))}
//             </div>

//             {/* Furnishing */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>
//                 Furnishing
//               </label>
//               {["Furnished", "Semi-Furnished", "Unfurnished"].map((val) => (
//                 <button key={val} style={{ margin: "5px", padding: "8px 14px" }}>
//                   {val}
//                 </button>
//               ))}
//             </div>

//             {/* Listed by */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>
//                 Listed by
//               </label>
//               {["Builder", "Dealer", "Owner"].map((val) => (
//                 <button key={val} style={{ margin: "5px", padding: "8px 14px" }}>
//                   {val}
//                 </button>
//               ))}
//             </div>

//             {/* Super Builtup area */}
//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 htmlFor="ft"
//                 style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}
//               >
//                 Super Builtup area sqft *
//               </label>
//               <input
//                 id="ft"
//                 name="ft"
//                 type="number"
//                 min="0"
//                 step="1"
//                 placeholder="Enter area"
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   fontSize: "14px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               <span style={{ color: "red", fontSize: "13px" }}>
//                 Super Builtup area sqft is mandatory. Please complete the required field.
//               </span>
//             </div>

//             {/* Carpet Area */}
//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 htmlFor="carpetarea"
//                 style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}
//               >
//                 Carpet Area sqft *
//               </label>
//               <input
//                 id="carpetarea"
//                 name="carpetarea"
//                 type="number"
//                 min="0"
//                 step="1"
//                 placeholder="Enter area"
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   fontSize: "14px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>

//       {/* Bachelors Allowed */}
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>Bachelors Allowed</label>
//         <div>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>No</button>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>Yes</button>
//         </div>
//       </div>

//       {/* Maintenance */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="maintenance" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Maintenance (Monthly)
//         </label>
//         <input
//           id="maintenance"
//           name="maintenance"
//           type="number"
//           min="0"
//           step="1"
//           placeholder="Enter maintenance cost"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         />
//       </div>

//       {/* Total Floors */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="totalfloors" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Total Floors
//         </label>
//         <input
//           id="totalfloors"
//           name="totalfloors"
//           type="number"
//           min="0"
//           step="1"
//           placeholder="Enter total floors"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         />
//       </div>

//       {/* Floor No */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="floorno" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Floor No
//         </label>
//         <input
//           id="floorno"
//           name="floorno"
//           type="number"
//           min="0"
//           step="1"
//           placeholder="Enter floor number"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         />
//       </div>

//       {/* Car Parking */}
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>Car Parking</label>
//         <div>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>0</button>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>1</button>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>2</button>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>3</button>
//           <button style={{ margin: '5px', padding: '8px 14px' }}>3+</button>
//         </div>
//       </div>

//       {/* Facing */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="facing" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>Facing</label>
//         <select
//           id="facing"
//           name="facing"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         >
//           <option value=""></option>
//           <option value="east">East</option>
//           <option value="north">North</option>
//           <option value="northeast">North-East</option>
//           <option value="northwest">North-West</option>
//           <option value="south">South</option>
//           <option value="southeast">South-East</option>
//           <option value="southwest">South-West</option>
//           <option value="west">West</option>
//         </select>
//       </div>

//       {/* Project Name */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="projects" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Project Name
//         </label>
//         <input
//           id="projects"
//           name="projects"
//           type="text"
//           maxLength="70"
//           step="any"
//           placeholder="Enter project name"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         />
//         <span style={{ fontSize: '12px', color: '#666' }}>0 / 70</span>
//       </div>

//       {/* Ad Title */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="title" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Ad Title *
//         </label>
//         <input
//           id="title"
//           name="title"
//           type="text"
//           maxLength="70"
//           placeholder="Enter ad title"
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         />
//         <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
//           Mention the key features of your item (e.g. brand, model, age, type) – 0 / 70
//         </div>
//       </div>

//       {/* Description */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="description" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Description *
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           maxLength="4096"
//           placeholder="Include condition, features, reason for selling"
//           style={{
//             width: '100%',
//             height: '96px',
//             padding: '10px',
//             fontSize: '14px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//         ></textarea>
//         <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
//           Include condition, features and reason for selling – 0 / 4096
//         </div>
//       </div>

//       {/* Price */}
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="price" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px' }}>
//           Price *
//         </label>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <span style={{ marginRight: '6px', fontWeight: 'bold' }}>₹</span>
//           <input
//             id="price"
//             name="price"
//             type="text"
//             pattern="(\d+[., \s]?\d?)*"
//             placeholder="Enter price"
//             style={{
//               flex: '1',
//               padding: '10px',
//               fontSize: '14px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//           />
//         </div>
//       </div>

//       {/* Upload Photos (Placeholder) */}

//       <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))", // Responsive column setup
//         gap: "10px",
//         marginTop: "10px",
//       }}
//     >
//       {Array.from({ length: 20 }).map((_, index) => (
//         <div key={index}>
//           <button
//             type="button"
//             title="Add Photo"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "60px",
//               height: "60px",
//               border: "2px solid #aaa",
//               borderRadius: "8px",
//               backgroundColor: "#fafafa",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.borderColor = "#333";
//               e.target.style.backgroundColor = "#f0f0f0";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.borderColor = "#aaa";
//               e.target.style.backgroundColor = "#fafafa";
//             }}
//           >
//             <svg width="28px" height="28px" viewBox="0 0 1024 1024">
//               <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
//             </svg>
//           </button>
//         </div>
//       ))}
//     </div>

//           </div>
//         </div>
//       </main>
//     );
//   }
import React, { useState, useRef } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  // Create a state object for storing form data
  const [formData, setFormData] = useState({
    category: "For Rent: Houses & Apartments",
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    bachelorsAllowed: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    title: "",
    projects:"",
    description: "",
    price: "",
    phone:"",
    state: "",
    name:"",
    
  touched: {
    superBuiltupArea: false,
  },
  });
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [priceTouched, setPriceTouched] = React.useState(false);

const priceIsValid = Number(formData.price) >= 1000;
  // Handle change for each input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const options = ["No", "Yes"];
  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // Do something with formData (e.g., send it to an API)
    console.log(formData);
  };

  const fileInputRef = useRef(null);
  const [images, setImages] = useState(Array(20).fill(null));

  const handleImageSelect = (index) => {
    fileInputRef.current.dataset.index = index; // Save which index to update
    fileInputRef.current.click(); // Trigger file input
  };
  const handleCarpetAreaChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      carpetArea: e.target.value,
    }));
  };
  
  const handleCarpetAreaBlur = (e) => {
    setFormData((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        carpetArea: true,
      },
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const index = parseInt(event.target.dataset.index);

    if (file && index !== null) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result; // Store base64 preview
        setImages(newImages);
      };
      reader.readAsDataURL(file); // Convert to base64
    }
  };
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true,
      },
    }));
  };
 
  const [activeTab, setActiveTab] = useState("list");
  
  const tabs = [
    { id: "list", label: "LIST" },
    { id: "current", label: "CURRENT LOCATION" },
  ];
  const [avatar, setAvatar] = useState("https://apollo.olx.in:443/v1/files/5ogni1js03lv2-IN/image;s=120x120");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  
  return (
    <main
      id="main_content"
      style={{
        fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h1
        style={{
          fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
          fontSize: "28px",
          color: "#002f34",
          marginBottom: "20px",
        }}
      >
        POST YOUR AD
      </h1>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "white",
          padding: "30px",
          textAlign: "left",
          border: "1px solid rgba(14,4,5,0.2)",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "500px",
          }}
        >
          {/* Selected Category */}
          <div style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "20px",
                color: "#002f34",
                marginBottom: "10px",
              }}
            >
              SELECTED CATEGORY
            </h2>
            <div>
              <ol
                style={{
                  paddingLeft: 0,
                  listStyle: "none",
                  display: "flex",
                  gap: "5px",
                }}
              >
                <li style={{ fontSize: "12px", color: "#8D9094" }}>
                  Properties /
                </li>
                <li style={{ fontSize: "12px", color: "#8D9094" }}>
                  {formData.category}
                </li>
                <li style={{ fontSize: "12px", color: "#8D9094" }}>
                  <span>
                    <a
                      href="/"
                      style={{
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        gap: "6px",
                        color: "#004896",
                        marginLeft: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Change
                    </a>
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Include some details */}
          <div style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "#002f34" }}>
              INCLUDE SOME DETAILS
            </h2>

            {/* Type */}
            <div style={{ marginBottom: "20px" }}>
              <label>Type *</label>
              <br />
              {[
                "Flats / Apartments",
                "Independent / Builder Floors",
                "Individual House / Villa",
              ].map((val) => {
                const isSelected = formData.type === val;
                return (
                  <button
                    key={val}
                    style={{
                      margin: "5px",
                      padding: "8px 14px",
                      backgroundColor: isSelected ? "#d9ebfe" : "#fff",
                      color: isSelected ? "#000" : "#000",
                      border:isSelected ? "1px solid black" : "1px solid " ,
                      borderColor: isSelected ? "black" : "#ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault(); // prevent form submission if inside a form
                      setFormData({ ...formData, type: val });
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>

            {/* BHK */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "14px" }}>BHK</label>
              <br />
              {[1, 2, 3, 4, "4+"].map((val) => {
                const isSelected = formData.bhk === val;
                return (
                  <button
                    key={val}
                    style={{
                      margin: "5px",
                      padding: "8px 14px",
                      backgroundColor: isSelected ? "#d9ebfe" : "#fff",
                      color: isSelected ? "#000" : "#000",
                      border: isSelected ? "1px solid  black" : "1px solid #ccc",
                      borderColor: isSelected ? "black" : "#ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault(); // prevent form submission if inside a form
                      setFormData({ ...formData, bhk: val });
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>

            {/* Bathrooms */}
            <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        Bathrooms
      </label>

      {[1, 2, 3, 4, "4+"].map((val) => {
        const isSelected = formData.bathrooms === val;
        return (
          <button
            key={val}
            onClick={() => setFormData({ ...formData, bathrooms: val })}
            style={{
              margin: "5px",
              padding: "8px 14px",
              border: isSelected ? "1px solid  black" : "1px solid #ccc",
              backgroundColor: isSelected ? "#d9ebfe" : "white",
              color: isSelected ? "black" : "black",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            {val}
          </button>
        );
      })}
    </div>

            {/* Furnishing */}
            <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        Furnishing
      </label>

      {["Furnished", "Semi-Furnished", "Unfurnished"].map((val) => {
        const isSelected = formData.furnishing === val;
        return (
          <button
            key={val}
            onClick={() => setFormData({ ...formData, furnishing: val })}
            style={{
              margin: "5px",
              padding: "8px 14px",
              border: isSelected ? "1px solid  black" : "1px solid #ccc",
              backgroundColor: isSelected ? "#d9ebfe" : "white",
              color: isSelected ? "black" : "black",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            {val}
          </button>
        );
      })}
    </div>
            {/* Listed by */}
            <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        Listed by
      </label>

      {["Builder", "Dealer", "Owner"].map((val) => {
        const isSelected = formData.listedBy === val;
        return (
          <button
            key={val}
            onClick={() => setFormData({ ...formData, listedBy: val })}
            style={{
              margin: "5px",
              padding: "8px 14px",
              border: isSelected ? "1px solid  black" : "1px solid #ccc",
              backgroundColor: isSelected ? "#d9ebfe" : "white",
              color: isSelected ? "black" : "black",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {val}
          </button>
        );
      })}
    </div>
            {/* Super Builtup area */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="ft"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
      color:
        formData.touched.superBuiltupArea &&
        !formData.superBuiltupArea
          ? "red"
          : "inherit",
    }}
  >
    Super Builtup area sqft *
  </label>
  <input
    id="ft"
    name="superBuiltupArea"
    type="number"
    min="0"
    step="1"
    
    value={formData.superBuiltupArea}
    onChange={handleChange1}
    onBlur={handleBlur}
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: formData.touched.superBuiltupArea &&
        !formData.superBuiltupArea
        ? "1px solid red"
        : "1px solid #ccc",
      borderRadius: "2px",
    }}
  />
  {formData.touched.superBuiltupArea &&
    !formData.superBuiltupArea && (
      <span style={{ color: "red", fontSize: "13px" }}>
        Super Builtup area sqft is mandatory. Please complete the required
        field.
      </span>
    )}
</div>

            {/* Other Fields */}
            {/* Repeat the pattern for other fields like carpet area, bachelors allowed, etc. */}
            {/* Carpet Area */}
            <div style={{ marginBottom: "20px" }}>
    <label
      htmlFor="carpetarea"
      style={{
        display: "block",
        fontSize: "14px",
        marginBottom: "6px",
        color:
          formData.touched.carpetArea && !formData.carpetArea
            ? "red"
            : "inherit",
      }}
    >
      Carpet Area sqft *
    </label>
    <input
      id="carpetarea"
      name="carpetarea"
      type="number"
      min="0"
      step="1"
      
      value={formData.carpetArea}
      onChange={handleCarpetAreaChange}
      onBlur={handleCarpetAreaBlur}
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "14px",
        border:
          formData.touched.carpetArea && !formData.carpetArea
            ? "1px solid red"
            : "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
    {formData.touched.carpetArea && !formData.carpetArea && (
      <span style={{ color: "red", fontSize: "13px" }}>
        Carpet Area sqft is mandatory. Please complete the required field.
      </span>
    )}
  </div>
            {/* Bachelors Allowed */}
            <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        Bachelors Allowed
      </label>
      <div>
        {options.map((val) => {
          const isSelected = formData.bachelorsAllowed === val;
          return (
          <button
            key={val}
            style={{
              margin: "5px",
              padding: "8px 14px",
              
              color: isSelected ? "#000" : "#000",
              
              borderColor: isSelected ? "black" : "#ccc",
              backgroundColor: formData.bachelorsAllowed === val ? "#d9ebfe" : "#fff",
              border: formData.bachelorsAllowed === val ? "1px solid black" : "1px solid #ccc",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            onClick={() =>
              setFormData({ ...formData, bachelorsAllowed: val })
            }
          >
            {val}
          </button>)
})}
      </div>
    </div>
            {/* Maintenance */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="maintenance"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Maintenance (Monthly)
  </label>
  <input
    id="maintenance"
    name="maintenance"
    type="number"
    min="0"
    step="1"
   
    value={formData.maintenance || ""}
    onChange={(e) =>
      setFormData({ ...formData, maintenance: e.target.value })
    }
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
  />
</div>


            {/* Total Floors */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="totalfloors"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Total Floors
  </label>
  <input
    id="totalfloors"
    name="totalfloors"
    type="number"
    min="0"
    step="1"
   
    value={formData.totalfloors || ""}
    onChange={(e) =>
      setFormData({ ...formData, totalfloors: e.target.value })
    }
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
  />
</div>


            {/* Floor No */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="floorno"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Floor No
  </label>
  <input
    id="floorno"
    name="floorno"
    type="number"
    min="0"
    step="1"
    
    value={formData.floorno || ""}
    onChange={(e) =>
      setFormData({ ...formData, floorno: e.target.value })
    }
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
  />
</div>


            {/* Car Parking */}
            <div style={{ marginBottom: "20px" }}>
  <label
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Car Parking
  </label>
  <div>
    {["0", "1", "2", "3", "3+"].map((val) => {
      const isSelected = formData.bachelorsAllowed === val;
      return (
      <button
        key={val}
        style={{
          margin: "5px",
          padding: "8px 14px",
          color: isSelected ? "#000" : "#000",
              
          borderColor: isSelected ? "black" : "#ccc",
          backgroundColor: formData.carParking === val ? "#d9ebfe" : "#fff",
          border: formData.carParking === val ? "1px solid black" : "1px solid #ccc",
          borderRadius: "2px",
          cursor: "pointer",
        }}
        onClick={() =>
          setFormData({ ...formData, carParking: val })
        }
      >
        {val}
      </button>)
})}
  </div>
</div>


            {/* Facing */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="facing"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Facing
  </label>
  <select
    id="facing"
    name="facing"
    value={formData.facing}
    onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    }}
  >
    <option value=""></option>
    <option value="east">East</option>
    <option value="north">North</option>
    <option value="northeast">North-East</option>
    <option value="northwest">North-West</option>
    <option value="south">South</option>
    <option value="southeast">South-East</option>
    <option value="southwest">South-West</option>
    <option value="west">West</option>
  </select>
</div>

            {/* Project Name */}
            <div style={{ marginBottom: "20px" }}>
  <label
    htmlFor="projects"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    Project Name
  </label>

  <input
    id="projects"
    name="projects"
    type="text"
    maxLength="70"
    value={formData.projects}
    onChange={(e) =>
      setFormData({ ...formData, projects: e.target.value })
    }
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    }}
  />

  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "4px",
    }}
  >
    <span style={{ fontSize: "12px", color: "#666" }}>
      {formData.projects.length} / 70
    </span>
  </div>
</div>

            {/* Ad Title */}
           

            <div style={{ marginBottom: "20px", position: "relative" }}>
  <label
    htmlFor="title"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
      color:
        titleTouched && formData.title.trim().length < 10 ? "red" : "inherit",
    }}
  >
    Ad Title *
  </label>

  <input
    id="title"
    name="title"
    type="text"
    maxLength="70"
    value={formData.title || ""}
    onChange={(e) =>
      setFormData({ ...formData, title: e.target.value })
    }
    onBlur={() => setTitleTouched(true)}
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border:
        titleTouched && formData.title.trim().length < 10
          ? "1px solid red"
          : "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    }}
  />

  {/* Below the input: conditional helper text and fixed counter */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "4px",
    }}
  >
    <span
      style={{
        fontSize: "12px",
        color:
          titleTouched && formData.title.trim().length < 10 ? "red" : "#666",
      }}
    >
      {titleTouched && formData.title.trim().length < 10
        ? "A minimum length of 10 characters is required. Please edit the field."
        : "Mention the key features of your item (e.g. brand, model, age, type)"}
    </span>

    <span style={{ fontSize: "12px", color: "#666" }}>
      {formData.title.length} / 70
    </span>
  </div>
</div>



            {/* Description */}
            <div style={{ marginBottom: "20px", position: "relative" }}>
  <label
    htmlFor="description"
    style={{
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
      color:
        descriptionTouched && formData.description.trim().length < 10
          ? "red"
          : "inherit",
    }}
  >
    Description *
  </label>

  <textarea
    id="description"
    name="description"
    maxLength="4096"
    value={formData.description || ""}
    onChange={(e) =>
      setFormData({ ...formData, description: e.target.value })
    }
    onBlur={() => setDescriptionTouched(true)}
    style={{
      width: "100%",
      height: "96px",
      padding: "10px",
      fontSize: "14px",
      border:
        descriptionTouched && formData.description.trim().length < 10
          ? "1px solid red"
          : "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    }}
  ></textarea>

  {/* Dynamic message or validation */}
  <div style={{ fontSize: "12px", color: descriptionTouched && formData.description.trim().length < 10 ? "red" : "#666", marginTop: "4px" }}>
    {descriptionTouched && formData.description.trim().length < 10
      ? "A minimum length of 10 characters is required. Please edit the field."
      : "Include condition, features and reason for selling"}
  </div>

  {/* Character counter bottom-right */}
  <div style={{ fontSize: "12px", color: "#666", position: "absolute", bottom: "0", right: "0", padding: "4px" }}>
    {formData.description.length} / 4096
  </div>
</div>

            {/* Price */}
            <div style={{ marginBottom: "20px" }}>
    <span
      style={{
        fontSize: "20px",
        color: "#020812",
        fontWeight: "bold",
        display: "block",
        marginBottom: "12px",
      }}
    >
      SET A PRICE
    </span>

    <label
      htmlFor="price"
      style={{
        display: "block",
        fontSize: "12px",
        marginTop: "16px",
        color: priceTouched && !priceIsValid ? "red" : "#8D9094",
        marginBottom: "6px",
      }}
    >
      Price *
    </label>

    <div style={{ position: "relative" }}>
      {/* Rupee Symbol */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: priceTouched && !priceIsValid ? "red" : "#8D9094",
          borderRight: "1px solid #ccc",
          paddingRight: "8px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        ₹
      </span>

      {/* Input Field */}
      <input
        id="price"
        name="price"
        type="number"
        min="0"
        placeholder="Enter price"
        value={formData.price || ""}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        onBlur={() => setPriceTouched(true)}
        style={{
          width: "100%",
          padding: "10px 20px 10px 40px", // extra left padding for rupee symbol
          fontSize: "14px",
          border: priceTouched && !priceIsValid ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
      />
    </div>

    {/* Error message */}
    {priceTouched && !priceIsValid && (
      <span style={{ color: "red", fontSize: "12px" }}>
        Price has a minimum value of 1000.
      </span>
    )}
  </div>
<hr />

            <div style={{}}>
            <h2 style={{fontSize:"20px"}}>UPLOAD UPTO 20 PHOTOS</h2>
              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                data-index=""
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              {/* Image upload grid */}
              <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    columnGap: "0px",
    rowGap: "7px",
    width: "450.5px",
    padding: "0 10px",
    marginTop: "6px",
  }}
>
  {Array.from({ length: 20 }).map((_, index) => {
    const isUploaded = !!images[index];
    const firstEmptyIndex = images.findIndex((img) => !img);
    const isNextToUpload = index === firstEmptyIndex;

    return (
      <div key={index} style={{ width: "100.5px" }}>
        <button
          type="button"
          title="Add Photo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100.5px",
            height: "100.5px",
            border: isNextToUpload ? "2px solid #002f34" : "2px solid #aaa",
            backgroundColor: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
          onClick={() => handleImageSelect(index)}
        >
          {isUploaded ? (
            <img
              src={images[index]}
              alt={`Preview ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <>
              <svg width="38px" height="38px" viewBox="0 0 1024 1024" fill={isNextToUpload ? "#002f34" : "#ccc"} >
                <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.04 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
              </svg>
              {isNextToUpload && (
                <span style={{  fontSize: "14px", marginTop: "5px" }}>
                  Add Photo
                </span>
              )}
            </>
          )}
        </button>
      </div>
    );
  })}
</div>
</div>

            <input
              accept="image/png, image/jpeg"
              type="file"
              multiple
              autoComplete="off"
              style={{
                position: "absolute",
                inset: "0px",
                opacity: "1e-05",
                pointerEvents: "none",
              }}
            />
            <p
              className="_35LX-"
              style={{ color: "red", fontSize: "14px", marginTop: "10px" }}
            >
              <span>This field is mandatory</span>
            </p>

            <div className="_2J38C"></div>

            <div className="rui-jIycK rui-VAm0G" style={{ marginTop: "20px" }}>
              <div
                className="_3Z-2F rui-jIycK rui-J9Nqc rui-RVnVw rui-ZvM8x rui-VAm0G"
                data-aut-id="location"
              >
                <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Confirm your location
                </h2>
                <div data-aut-id="sphereLocationTabContainer">
                <ul
      role="tablist"
      aria-label="Location selection tabs"
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        listStyle: "none",
        borderBottom: "2px solid #ccc",
      }}
    >
      {tabs.map(({ id, label }) => {
        const isActive = activeTab === id;
        return (
          <li
            key={id}
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              onClick={() => setActiveTab(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveTab(id);
                }
              }}
              style={{
                padding: "12px 0",
                cursor: "pointer",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "5px solid #004896" : "3px solid transparent",
                userSelect: "none",
                outline: "none",
              }}
            >
              {label}
            </div>
          </li>
        );
      })}
    </ul>
                  <div
                    className="rui-8PlwS _2Z47H"
                    data-aut-id="sphereTabContentLocationSelector"
                  >
                    <div className="_1iLzt">
                      <div className="BM_Lq">
                        <div className="rui-Bz2UM" style={{ marginTop:"40px",  }}>
                          <label
                            htmlFor="State"
                            style={{ fontSize: "14px",  }}
                          >
                            State *
                          </label>
                          <div className="rui-tLDMy rui-BoFpM rui-ou7AH">
                            <select
                              id="State"
                              name="State"
                              className="rui-2brBP rui-gEwdV"
                              data-aut-id="dd-state"
                              style={{
                                width: "100%",
                                padding: "8px 12px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                              }}
                              value={formData.state}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  state: e.target.value,
                                })
                              }
                            >
                              <option value="unknown"></option>
                              <option value="2007598">
                                Andaman & Nicobar Islands
                              </option>
                              <option value="2001145">Andhra Pradesh</option>
                              <option value="2001146">Arunachal Pradesh</option>
                              <option value="2001147">Assam</option>
                              <option value="2001148">Bihar</option>
                              <option value="2001149">Chandigarh</option>
                              <option value="2001178">Chhattisgarh</option>
                              <option value="2001150">
                                Dadra & Nagar Haveli
                              </option>
                              <option value="2001151">Daman & Diu</option>
                              <option value="2001152">Delhi</option>
                              <option value="2001153">Goa</option>
                              <option value="2001154">Gujarat</option>
                              <option value="2001155">Haryana</option>
                              <option value="2001156">Himachal Pradesh</option>
                              <option value="2001157">Jammu & Kashmir</option>
                              <option value="2001158">Jharkhand</option>
                              <option value="2001159">Karnataka</option>
                              <option value="2001160">Kerala</option>
                              <option value="2001161">Lakshadweep</option>
                              <option value="2001162">Madhya Pradesh</option>
                              <option value="2001163">Maharashtra</option>
                              <option value="2001164">Manipur</option>
                              <option value="2001165">Meghalaya</option>
                              <option value="2001166">Mizoram</option>
                              <option value="2001167">Nagaland</option>
                              <option value="2001168">Odisha</option>
                              <option value="2001169">Pondicherry</option>
                              <option value="2001170">Punjab</option>
                              <option value="2001171">Rajasthan</option>
                              <option value="2001172">Sikkim</option>
                              <option value="2001173">Tamil Nadu</option>
                              <option value="2007599">Telangana</option>
                              <option value="2001174">Tripura</option>
                              <option value="2001176">Uttar Pradesh</option>
                              <option value="2001175">Uttaranchal</option>
                              <option value="2001177">West Bengal</option>
                            </select>
                            <div className="rui-Q6xN5">
                              <div className="rui-UgU64">
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 1024 1024"
                                  data-aut-id="icon"
                                  fillRule="evenodd"
                                >
                                  <path
                                    className="rui-YQRFW"
                                    d="M744.727 450.484v-54.846h-54.846l-216.669 216.669-100.305-100.305h-54.846v54.846l127.728 127.728h54.846l244.092-244.092zM512 162.911c-192.485 0-349.091 156.606-349.091 349.091s156.606 349.091 349.091 349.091c192.485 0 349.091-156.606 349.091-349.091s-156.606-349.091-349.091-349.091v0zM512 938.669c-235.268 0-426.667-191.399-426.667-426.667s191.399-426.667 426.667-426.667c235.268 0 426.667 191.399 426.667 426.667s-191.399 426.667-426.667 426.667v0z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="rui-1bxrI">
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 1024 1024"
                                  data-aut-id="icon"
                                  fillRule="evenodd"
                                >
                                  <path
                                    className="rui-jxF7i"
                                    d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="rui-4jgcG">
                            <span
                              className="rui-IlMwo rui-DTzlG"
                              data-aut-id=""
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="x03Si">This field is mandatory</p>
                </div>
              </div>
            </div>

            <div className="rui-jIycK rui-VAm0G" style={{width:"100%"}}>
      <div className="_2J38C"></div>
      <div className="_3Z-2F rui-jIycK rui-J9Nqc rui-RVnVw rui-ZvM8x rui-VAm0G" data-aut-id="contact">
        <h2>Review your details</h2>

        <div className="rui-JOX86 rui-v22So rui-w0uzm rui-5xHoL" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Avatar Upload */}
          <div className="_1UjBf">
            <div className="_2LCMK" style={{ position: 'relative', width: '80px', height: '100px' }}>
              <input
                type="file"
                accept="image/jpg,image/jpeg,image/png"
                style={{ display: 'none' }}
                id="avatarUpload"
                onChange={handleImageChange}
              />
              <label htmlFor="avatarUpload" style={{ cursor: 'pointer' }}>
                <figure
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundImage: `url(${avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid #ccc",
                    margin:"0px 0px"
                  }}
                >
                </figure>
              </label>
            </div>
          </div>

          {/* Name and Price Input */}
          <div className="rui-C7oc3" style={{ flexGrow: 1, minWidth: "250px" }}>
  <div className="rui-Bz2UM" style={{ marginBottom: "15px" }}>
    <label htmlFor="name">Name</label>

    <input
      id="name"
      name="name"
      type="text"
      maxLength={30}
      
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        marginTop: "5px",
      }}
    />

    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        fontSize: "12px",
        color: "#666",
        marginTop: "5px",
      }}
    >
      {formData.name.length} / 30
    </div>
  </div>
</div>

         <div> <h3>Let's verify your account</h3><span>We will send you a confirmation code by sms on
         the next step.</span></div>
         <div>
         <div className="rui-C7oc3" style={{ flexGrow: 1, minWidth: "250px" }}>
      <div className="rui-Bz2UM" style={{ marginBottom: "15px" }}>
        <label htmlFor="phone">Mobile Phone Number*</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "5px",
            overflow: "hidden",
          }}
        >
          {/* +91 Prefix */}
          <span
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRight: "1px solid #ccc",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            +91
          </span>

          {/* Input field */}
          <input
            id="phone"
            name="phone"
            type="tel"
           
            value={formData.phone}
            onChange={(e)=>{setFormData({
                ...formData,
                phone: e.target.value,
              })}}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "14px",
              border: "none",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
         </div>
        </div>
      </div>
    </div>

            {/* Submit Button */}
            <div style={{ marginTop: "20px" }}>
  <button
    type="submit"
    disabled={
      !formData.type ||
      !formData.superBuiltupArea ||
      !formData.carpetArea ||
      !formData.title ||
      !formData.description ||
      !formData.price ||
      !formData.state ||
      !formData.phone
    }
    style={{
      padding: "10px 20px",
      backgroundColor:
        formData.type &&
        formData.superBuiltupArea &&
        formData.carpetArea &&
        formData.title &&
        formData.description &&
        formData.price &&
        formData.state &&
        formData.phone
          ? "#002f34"
          : "#ccc",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor:
        formData.type &&
        formData.superBuiltupArea &&
        formData.carpetArea &&
        formData.title &&
        formData.description &&
        formData.price &&
        formData.state &&
        formData.phone
          ? "pointer"
          : "not-allowed",
    }}
  >
    Post now
  </button>
</div>

          </div>
        </form>
      </div>
    </main>
  );
}
