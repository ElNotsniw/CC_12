// Task 1 - Created Revenue Metric Card

// Using .getElementById and .querySelector to select the dashboard container

const dashboardContainerbyID = document.getElementById(`dashboard`)

const dashboardContainerbyQuery = document.querySelector(`dashboard`)

// Creating a metric card to add to the HTML code, which includes an id (revenueCard) and class (metric-card).
const metricCard = document.createElement(`div`)

metricCard.setAttribute(`id`, `revenueCard`)
metricCard.setAttribute(`class`, `metric-card`)

metricCard.innerHTML =
`<h3>Revenue</h3>
<p>$0</p>`

// Finally, appending it to the parent node, "dashboard".


dashboardContainerbyID.appendChild(metricCard)




// Task 2 - Updated Metric Cards via Array Conversion

// Using the .querySelectorAll to select any elements that have "metric-card" as their class.

const metricCards = document.querySelectorAll(`.metric-card`)

// Converting the NodeList into an array using Array.from.

const metricCardsArray = Array.from(metricCards)

// Updating the inner text from the metric card to have the word, "- Updated" next to it and changing the background color of it.

metricCardsArray.forEach((card) => {
    const title = card.querySelector(`h3`)
    if (title) {
        title.innerText = `${title.innerText} - Updated`
    }
    card.style.backgroundColor = `#CBC3E3`
})





// Task 3 -Implemented Dynamic Inventory List

// Making a function to add a product to the list.

function addproduct() {
    const inventorylist = document.getElementById("inventorylist")

const newproductitem = document.createElement("li")

newproductitem.setAttribute("class", "product-item")
newproductitem.setAttribute("data-product", "New Product")

newproductitem.textContent = "Phone"

inventorylist.appendChild(newproductitem)

// Making an event that removes the product when clicked on.

newproductitem.addEventListener("click", removeproduct)

}

// Making the function that removes the product from the list.

function removeproduct(event) {
    const itemremove = event.target
    const inventorylist = document.getElementById("inventorylist")

    inventorylist.removeChild(itemremove)
}




// Task 4 - Demonstrated Event Bubbling in Customer Section

// Creating a callback function to where if the customer section container is clicked, it console-logs that it was clicked.

const customersection = document.getElementById("customersection");
    document.addEventListener("click", () => {
        console.log("Customer section clicked");
    });


// Creating a callback function to where if any of the customer section boxes are clicked, it console-logs that the boxes were clicked.

const customercards = document.querySelectorAll(".customer-card");

customercards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer card clicked");

         event.stopPropagation()
    });
});