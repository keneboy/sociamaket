export let complexForm = {
  products: {
    "Laptops and Computers": {
      form: [
        {
          label: "Type",
          arr: [
            {
              name: "Desktop Computer",
            },
            {
              name: "Laptop",
            },
            {
              name: "Server",
            },
          ],
        },
        {
          label: "Brand",
          arr: [
            { name: "Apple", country: "United States" },
            { name: "Dell", country: "United States" },
            { name: "HP", country: "United States" },
            { name: "Lenovo", country: "China" },
            { name: "Asus", country: "Taiwan" },
            { name: "Acer", country: "Taiwan" },
            { name: "Microsoft", country: "United States" },
            { name: "Samsung", country: "South Korea" },
            { name: "MSI", country: "Taiwan" },
            { name: "Razer", country: "United States" },
            { name: "Huawei", country: "China" },
            { name: "Toshiba", country: "Japan" },
            { name: "Sony", country: "Japan" },
            { name: "LG", country: "South Korea" },
            { name: "Fujitsu", country: "Japan" },
            { name: "Google", country: "United States" },
            { name: "Xiaomi", country: "China" },
            { name: "Medion", country: "Germany" },
            { name: "Gateway", country: "United States" },
            { name: "Compaq", country: "United States" },
            { name: "Chuwi", country: "China" },
            { name: "Positivo", country: "Brazil" },
            { name: "Vizio", country: "United States" },
            { name: "Panasonic", country: "Japan" },
            { name: "IBM", country: "United States" },
            { name: "Alienware", country: "United States" },
            { name: "System76", country: "United States" },
            { name: "Honor", country: "China" },
            { name: "Vaio", country: "Japan" },
            { name: "Clevo", country: "Taiwan" },
            { name: "Pinebook", country: "United States" },
            { name: "One Netbook", country: "China" },
            { name: "Eurocom", country: "Canada" },
            { name: "Maingear", country: "United States" },
            { name: "Origin PC", country: "United States" },
            { name: "Schenker", country: "Germany" },
            { name: "Terrans Force", country: "China" },
            { name: "Tuxedo Computers", country: "Germany" },
            { name: "VoodooPC", country: "Canada" },
            { name: "Zotac", country: "Hong Kong" },
            { name: "Teclast", country: "China" },
          ],
        },
        {},
      ],
    },
    "Accessories and Supplies for Electronics": {
      form: [
        {
          label: "Title",
        },
        // case of having multiple options
        {
          label: [
            {
              label: "Brand",
              arr: [
                { name: "Belkin", country: "United States" },
                { name: "Logitech", country: "Switzerland" },
                { name: "Anker", country: "United States" },
                { name: "Samsung", country: "South Korea" },
                { name: "Sony", country: "Japan" },
                { name: "JBL", country: "United States" },
                { name: "Bose", country: "United States" },
                { name: "Corsair", country: "United States" },
                { name: "Razer", country: "United States" },
                { name: "SteelSeries", country: "Denmark" },
                { name: "HyperX", country: "United States" },
                { name: "Apple", country: "United States" },
                { name: "Microsoft", country: "United States" },
                { name: "HP", country: "United States" },
                { name: "Dell", country: "United States" },
                { name: "Asus", country: "Taiwan" },
                { name: "Acer", country: "Taiwan" },
                { name: "LG", country: "South Korea" },
                { name: "NZXT", country: "United States" },
                { name: "Thermaltake", country: "Taiwan" },
                { name: "Others", country: "Various" }, // Including Others
              ],
            },
            {
              label: "Type",
              arr: [
                {
                  name: "Audio & Music accessories",
                },
                {
                  name: "Camera accessories",
                },
                {
                  name: "Game console accessories",
                },
                {
                  name: "Computer accessories",
                },
                {
                  name: "Headphone accessories",
                },

                {
                  name: "Phone & Video accessories",
                },
                {
                  name: "Printer & Scanner accessories",
                },
                {
                  name: "Smartwatch accessories",
                },
                {
                  name: "Tablet accessories",
                },
                {
                  name: "Television accessories",
                },
                {
                  name: "Video game accessories",
                },

                {
                  name: "Others",
                },
              ],
            },
          ],
        },

        {
          label: "Condition",
          arr: [
            { name: "Brand New" },
            { name: "Used" },
            { name: "Refurbished" },
            { name: "For parts or not working" },
          ],
        },
        {
          label: "Description",
          isStandALong: true,
        },
        {
          label: "Price",
        },
      ],
    },

    //
  },
};

export let brand = [
  { name: "Belkin", country: "United States" },
  { name: "Logitech", country: "Switzerland" },
  { name: "Anker", country: "United States" },
  { name: "Samsung", country: "South Korea" },
  { name: "Sony", country: "Japan" },
  { name: "JBL", country: "United States" },
  { name: "Bose", country: "United States" },
  { name: "Corsair", country: "United States" },
  { name: "Razer", country: "United States" },
  { name: "SteelSeries", country: "Denmark" },
  { name: "HyperX", country: "United States" },
  { name: "Apple", country: "United States" },
  { name: "Microsoft", country: "United States" },
  { name: "HP", country: "United States" },
  { name: "Dell", country: "United States" },
  { name: "Asus", country: "Taiwan" },
  { name: "Acer", country: "Taiwan" },
  { name: "LG", country: "South Korea" },
  { name: "NZXT", country: "United States" },
  { name: "Thermaltake", country: "Taiwan" },
  { name: "Others", country: "Various" }, // Including Others
];
export let type = [
  {
    name: "Audio & Music accessories",
  },
  {
    name: "Camera accessories",
  },
  {
    name: "Game console accessories",
  },
  {
    name: "Computer accessories",
  },
  {
    name: "Headphone accessories",
  },

  {
    name: "Phone & Video accessories",
  },
  {
    name: "Printer & Scanner accessories",
  },
  {
    name: "Smartwatch accessories",
  },
  {
    name: "Tablet accessories",
  },
  {
    name: "Television accessories",
  },
  {
    name: "Video game accessories",
  },

  {
    name: "Others",
  },
];
export let condition = [
  { name: "Brand New" },
  { name: "Used" },
  { name: "Refurbished" },
  { name: "For parts or not working" },
];
