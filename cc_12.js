// Task 1 - Created Revenue Metric Card

// Using .getElementById and .querySelector to select the dashboard container

const dashboardContainerbyID = document.getElementById(`dashboard`)

const dashboardContainerbyQuery = document.querySelector(`dashboard`)

// Creating a metric card to add to the HTML code, which includes an id (revenueCard) and class (metric-card), then finally appending it to the parent node, "dashboard"

const metricCard = document.createElement(`div`)

metricCard.setAttribute(`id`, `revenueCard`)
metricCard.setAttribute(`class`, `metric-card`)

metricCard.innerHTML =
`<h3>Revenue</h3>
<p>$0</p>`

dashboardContainerbyID.appendChild(metricCard)