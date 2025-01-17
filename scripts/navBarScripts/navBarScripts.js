/* DECLARE MAIN STYLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
/* /////////////////////////////////////////////////////////////////// */

    /* BODY ELEMENTS STYLES ------------------------------------------ */
    /* /////////////////////////////////////////////////////////////// */

        // VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR NAV BAR ONE MAKE /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var getNavBarOneCushion = document.querySelector(".navBarOne")

                    // NAV BAR STRINGS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navItemsStringCollector = ""
                        var navTitleItemStringCollector = ""

                    // NAV BAR NUMBER SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarClassNameNumberSelector = "";

                    // NAV BAR CLASS NAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarClassName = ""

                    // NAV BAR TITLE NAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarTitleName = ""

                    // NAV BAR MENU ITEMS SIZING SETTINGS xxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarDesktopTitleItemsSizing = "40%"
                        var getNavBarDesktopMenuItemsSizing = "60%"

                    // NAV BAR MENU ITEMS DISPLAY SETTINGS xxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var getNavBarDesktopMenuItemsSetting = "inline-table"
                        var getNavBarMobileMenuItemsSetting = "none"

                    // COUNTER OFFICIAL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemsCounter = 0;

                    // NAV BAR ITEM SELECT NUMBER xxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemFunctionSelect = 0;

                    // SCREEN WIDTH SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var screenWidthSelector = 0;

        // ARRAYS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR ALL NAV BAR COLLECTIONS //////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeNavBarVariations = [

                ]

            // FOR CLASS NUMBER COUNTER /////////////////////////////////
            // //////////////////////////////////////////////////////////

                var classNumberMapper = [

                    "One", "Two", "Three", "Four", "Five",
                    "Six", "Seven", "Eight", "Nine", "Ten",

                    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                    "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive",
                    "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                    "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive",
                    "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                    "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive",
                    "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fifty"

                ]

            // FOR ALL BAR ITEMS ////////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeNavBarSplits = []
                var storeNavBarTitle = []
                var storeNavBarItemsClassNames = []
                var storeNavBarMobileClickersClassNames = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var storeSelectedNavBar = []

            // FOR NAV BAR SELECTED /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                // NAV BAR LINE ITEMS -----------------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarItemPopulationFunctions = [
                        
                    ]

                // NAV BAR MOBILE MENU MAKE -----------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuMakes = [

                    ]

                // BUILD NAV BAR CONTENT ITEMS --------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarContentBuilds = [

                    ]

                // BUILD MOBILE SIDE PANELS CONTENT ITEMS ---------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileSidePanels = [

                    ]

                // BUILD POPULATE MOBILE MENU ITEMS ---------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarMobileMenuItemsPopulates = [

                    ]









            















        // AUTO RUNS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // AUTO RUNS FOR NAV BARS -----------------------------------
            // //////////////////////////////////////////////////////////

                detectCurrentWindowSize()


































        // FUNCTIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////











        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


            // BUILD ELEMENTS FOR NAV BAR OPTION ONE --------------------
            // //////////////////////////////////////////////////////////

                // GET NAV BAR TITLE FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarTitleTextItemFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("/dox/navOne/navBarTitleText.txt")
                                .then(res => res.text())
                                .then((text) => {
                                    
                                    sessionStorage.setItem("title", text)
                                
                                })

                    }




                    function getNavBarItemsFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////

                                fetch("/dox/navOne/navBarText.txt")
                                    .then(res => res.text())
                                    .then((text) => {
                                        
                                        sessionStorage.setItem("read", text)
                                    
                                    })


                    }


















        


        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // INTRO HEADER CREATION SECTION =============================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>









            















        // EVENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // EVENTS FOR NAV BARS --------------------------------------
            // //////////////////////////////////////////////////////////

                // CHECK FOR SCREEN SIZE CHANGE -------------------------
                // //////////////////////////////////////////////////////

                    window.addEventListener("resize", function () {

                        // DECLARE PRIMARY VARIABLES ////////////////////
                        // //////////////////////////////////////////////

                            var windowWidth = window.innerWidth




                            // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxx
                            // //////////////////////////////////////////

                                // FOR SCREEN SIZE 300 ------------------
                                // //////////////////////////////////////

                                    if ( windowWidth > 0 && windowWidth < 300 ) {

                                        console.log("300 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 300

                                                        

                                                        

                                    }

                                // FOR SCREEN SIZE 500 ------------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 300 && windowWidth < 500 ) {

                                        console.log("300 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 300

                                                        

                                    }

                                // FOR SCREEN SIZE 800 ------------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 500 && windowWidth < 800 ) {

                                        console.log("500 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 500

                                                        

                                    }

                                // FOR SCREEN SIZE 1000 -----------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                        console.log("800 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 800

                                                        

                                    }

                                // FOR SCREEN SIZE 1200 -----------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                        console.log("1000 LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 1000

                                                        

                                    }

                                // FOR SCREEN SIZE 1200 + ---------------
                                // //////////////////////////////////////

                                    else if ( windowWidth > 1200 ) {

                                        console.log("BEYOND LOCKED IN...")

                                            // UPDATE WINDOW SIZE FOR COLLECTOR
                                            // //////////////////////////

                                                screenWidthSelector = 1200

                                                        

                                    }

                    })