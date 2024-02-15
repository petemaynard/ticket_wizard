
const purchaseBtn = document.querySelector(".purchaseBtn");
const custTixId = purchaseBtn.id;

purchaseBtn.addEventListener("click", async function(event) {
  const response = await fetch(`/api/tickets/${custTixId}`, {
    method: "PUT",
    body: JSON.stringify({ cust_tix_id: custTixId, purchased: true }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Thank you for your purchase!");
    document.location.replace("/purchases");
  } else {
    alert("Failed to complete purchase");
  }
})
