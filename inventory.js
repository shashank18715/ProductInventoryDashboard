
console.log("--- Initializing Inventory System ---");

// 1. Data & Input Initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details from the user
let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

// 2. Control Flow & Conditional Evaluation
if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    const product = {
        name: productName.trim(),
        price: productPrice
    };

    inventory.push(product);
    console.log(
        `[Prompt executed: User adds "${product.name}" at "$${product.price}"]`
    );
} else {
    console.log("Invalid input. Product was not added.");
}

// Assign a category using if...else and switch
function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

function getCategoryBadge(category) {
    switch (category) {
        case "Budget":
            return "[BUDGET]";
        case "Standard":
            return "[STANDARD]";
        case "Premium":
            return "[PREMIUM]";
        default:
            return "[UNKNOWN]";
    }
}

// 3. Loops & Flow Control
console.log("\n--- Processing Inventory Roster (forEach) ---");

for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];

    if (!item.name || item.price <= 0) {
        continue;
    }

    const category = getCategory(item.price);

    console.log(
        `* Item: ${item.name} ($${item.price}) -> ` +
        `Category: ${category} ${getCategoryBadge(category)}`
    );

    // Example of break: stop after processing all valid products
    if (i === inventory.length - 1) {
        break;
    }
}

// 4. Functions & Scope
function calculateTotal(items) {
    let total = 0;

    items.forEach(item => {
        total += item.price;
    });

    return total;
}

const calculateAfterTax = (amount, taxRate) => {
    return amount + amount * (taxRate / 100);
};

const applyDiscount = (amount, discountRate) => {
    return amount - amount * (discountRate / 100);
};

// 5. Array Methods & Analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log(`Total Inventory Value: $${totalValue}`);

const affordableItems = inventory.filter(
    item => item.price < 200
);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map(item => item.name)
);

const formattedReport = inventory.map(
    item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", formattedReport);

// Additional financial calculations
console.log(
    "Total After 10% Tax: $" +
    calculateAfterTax(totalValue, 10).toFixed(2)
);

console.log(
    "Total After 5% Discount: $" +
    applyDiscount(totalValue, 5).toFixed(2)
);