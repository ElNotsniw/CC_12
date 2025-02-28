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