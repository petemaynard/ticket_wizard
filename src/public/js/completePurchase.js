
const purchaseBtn = document.querySelector(".purchaseBtn");

purchaseBtn.addEventListener("click", async function(event) {
  const response = await fetch(`/api/tickets/321`, {
    method: "PUT",
    body: JSON.stringify({ cust_tix_id: "321", purchased: true }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Thank you for your purchase!");
    document.location.replace("/purchases");
  } else {
    alert("Failed to complete purchase");
  }
})
