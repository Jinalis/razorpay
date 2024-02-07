import './App.css';
import useRazorpay from 'react-razorpay';
import { useCallback } from 'react';

function App() {

  const [Razorpay] = useRazorpay()

  const handlePyament = useCallback(async()=>{
    // const order = await createOrder(params);
    const options = {
      key: "rzp_test_RMb8MrgBurdqE6",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "000003194",
      handler: (response) => {
        console.log(response);
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
      },
      prefill: {
        name: "jinali",
        email: "jinali.sanghvi@krishtechnolabs.com",
        contact: "9426716237",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  

  return (
    <div className="App">
     <button onClick={handlePyament}>Payment</button>
    </div>
  );
}

export default App;
