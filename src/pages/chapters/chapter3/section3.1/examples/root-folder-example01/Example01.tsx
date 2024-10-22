import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Example01() {
  useEffect(() => {
    let form = document.getElementById("form");
    let textarea = document.getElementById("textarea");
    let button = document.getElementById("button");
    let loadingMessage = document.getElementById("loading");
    let errorMessage = document.getElementById("error");
    let successMessage = document.getElementById("success");

    async function handleFormSubmit(e) {
      e.preventDefault();
      disable(textarea);
      disable(button);
      show(loadingMessage);
      hide(errorMessage);
      try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
      } catch (err) {
        show(errorMessage);
        errorMessage.textContent = err.message;
      } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
      }
    }

    function handleTextareaChange() {
      if (textarea.value.length === 0) {
        disable(button);
      } else {
        enable(button);
      }
    }

    function hide(el) {
      el.style.display = "none";
    }

    function show(el) {
      el.style.display = "";
    }

    function enable(el) {
      el.disabled = false;
    }

    function disable(el) {
      el.disabled = true;
    }

    function submitForm(answer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (answer.toLowerCase() === "istanbul") {
            resolve();
          } else {
            reject(new Error("Good guess but a wrong answer. Try again!"));
          }
        }, 1500);
      });
    }

    form.onsubmit = handleFormSubmit;
    textarea.oninput = handleTextareaChange;

    // Cleanup on component unmount
    return () => {
      form.onsubmit = null;
      textarea.oninput = null;
    };
  }, []);

  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section3.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>
          Example 01: <span>How declarative UI compares to imperative</span>
        </h2>
      </section>
      {/* Render your React code below: */}
      <form id="form">
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea id="textarea" className="text-black"></textarea>
        <br />
        <button id="button" disabled>
          Submit
        </button>
        <p id="loading" style={{ display: "none" }}>
          Loading...
        </p>
        <p id="error" style={{ display: "none" }} className="text-red-500"></p>
      </form>
      <h1 id="success" style={{ display: "none" }}>
        That's right!
      </h1>
    </div>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Example01() {
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);
//     try {
//       await submitForm(answer);
//       setSuccess(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTextareaChange = (e) => {
//     setAnswer(e.target.value);
//   };

//   const submitForm = (answer) => {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (answer.toLowerCase() === "istanbul") {
//           resolve();
//         } else {
//           reject(new Error("Good guess but a wrong answer. Try again!"));
//         }
//       }, 1500);
//     });
//   };

//   return (
//     <div className="page-container">
//       <Link className="link-homepage" to="/section3.1">
//         Back to Section Page
//       </Link>
//       <section className="py-6 text-xl">
//         <h2>
//           Example 01: <span>How declarative UI compares to imperative</span>
//         </h2>
//       </section>
//       {/* React implementation for the form */}
//       <form onSubmit={handleFormSubmit}>
//         <h2>City quiz</h2>
//         <p>What city is located on two continents?</p>
//         <textarea
//           className="text-black"
//           value={answer}
//           onChange={handleTextareaChange}
//         ></textarea>
//         <br />
//         <button type="submit" disabled={loading || answer.length === 0}>
//           Submit
//         </button>
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//       </form>
//       {success && <h1>That's right!</h1>}
//     </div>
//   );
// }
