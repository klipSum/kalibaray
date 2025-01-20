// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////
// DECLARE VARIABLES =========================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    /* BODY ELEMENTS STYLES ------------------------------------------ */
    /* /////////////////////////////////////////////////////////////// */

        // VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // //////////////////////////////////////////////////////////////

            // FOR NAV BAR ONE MAKE /////////////////////////////////////
            // //////////////////////////////////////////////////////////

                var getBody = document.querySelector("body")
                var getNavBarOneCushion = document.querySelector(".navBarOne")

                    // NAV BAR STRINGS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navItemsStringCollector = ""
                        var navTitleStringCollector = ""

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

                    // COUNTER FOR SECTION DETECTOR LOOP xxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var sectionLoopCounter = 10;

                    // COUNTER OFFICIAL xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemsCounter = 0;

                    // NAV BAR ITEM SELECT NUMBER xxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var navBarItemFunctionSelect = 0;

                    // SCREEN WIDTH SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////////

                        var screenWidthSelector = 0;
                        var screenWidthResizerSelector = 0;

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

                var storeNavBarItems = []
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

                    var storeNavBarMainPlates = [

                        createNavBarOneMainPlate
                        
                    ]

                // NAV BAR THEME MAIN BACKGROUND ------------------------
                // //////////////////////////////////////////////////////

                    var storeNavBarThemeBackground = [

                        "#B35151"

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


































        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


            // BUILD ELEMENTS FOR NAV BAR OPTION ONE ------------------------
            // //////////////////////////////////////////////////////////////

                // GET NAV BAR TITLE FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarTitleTextItemFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("dox/navBarTexts/navOneTexts/navBarOneItemsText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navItemsStringCollector = text


                                            // CHECK IF TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navItemsStringCollector == "" ) {

                                                    for ( navBarDummyPopulate = 0; navBarDummyPopulate < 5; navBarDummyPopulate++ ) {
            
                                                        storeNavBarItems.push(`item${classNumberMapper[navBarDummyPopulate]}`)
            
                                                    }

                                                }

                                            // AND IF TEXT CAPTURE HAS ITEMS
                                            // //////////////////////////////

                                                else {

                                                    // FIRST EMPTY UP NAV BAR STORAGE ARRAY
                                                    // //////////////////////

                                                        storeNavBarItems = []

                                                    // THEN POPULATE NAV BAR ITEMS ARRAY
                                                    // //////////////////////

                                                        var navBarItemsSplits = navItemsStringCollector.split(",").length
                                                        var navBarItemsSplitsFilter = navItemsStringCollector.split(",")
                
                                                        for ( navBarItemsCounter = 0; navBarItemsCounter < navBarItemsSplits; navBarItemsCounter++ ) {
                
                                                            storeNavBarItems.push(navBarItemsSplitsFilter[navBarItemsCounter])
                
                                                        }

                                                }



                                
                                })

                    }




                    function getNavBarItemsFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////

                                fetch("dox/navBarTexts/navOneTexts/navBarOneTitleText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navTitleStringCollector = text

                                            // CHECK IF TITLE TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navTitleStringCollector == "" ) {

                                                    navTitleStringCollector == "default title"

                                                }

                                            // AND IF TITLE TEXT CAPTURE HAS ITEM
                                            // //////////////////////////////

                                                else {

                                                    navTitleStringCollector = text

                                                }

                                
                                })


                    }





        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // NAV BAR CREATION SECTION ==================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>








































        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // FUNCTIONS =================================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





            // DETECT LIVING BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectLivingBar () {

                    var getLivingNavBar = getBody.children[0]

                        // CHECK THAT FIRST CHILD IS NAV BAR ----------------
                        // //////////////////////////////////////////////////

                            if ( getLivingNavBar == null || getLivingNavBar == undefined ) {

                                console.log("NO NAV BAR FOUND HERE...")
                                
                            }

                        // IF ALIVE THEN RUN NAV BAR POPULATE ---------------
                        // //////////////////////////////////////////////////

                            else {

                                console.log("FOUND FIRST ELEMENT...")

                                    // CHECK IF FIRST CHILD CLASSNAME INCLUDES NAV BAR KEY WORDS
                                    // //////////////////////////////////////

                                        if ( getLivingNavBar.className.includes("navBar") ) {


                                            // STORE ACTIVE NAV BAR /////////////////
                                            // //////////////////////////////////////

                                                storeSelectedNavBar.push(getLivingNavBar.className)

                                                    // CHECK WHICH NAV BAR IS ALIVE =
                                                    // //////////////////////////////

                                                        for ( navBarNumberCounter = 0; navBarNumberCounter < sectionLoopCounter; navBarNumberCounter ++ ) {



                                                            if ( 
                                                                
                                                                    storeSelectedNavBar[0] == `navBar${classNumberMapper[navBarNumberCounter]}` || 
                                                                    toString(storeSelectedNavBar[0]).includes(`navBar${classNumberMapper[navBarNumberCounter]}`) 
                                                                )

                                                            {

                                                                // CREATE NEW ELEMENT SELECTOR //////////
                                                                // //////////////////////////////////////
                            
                                                                    var getSelectedNavBar = document.querySelector(`.navBar${classNumberMapper[navBarNumberCounter]}`)




                                                                // PLACE MAIN NAV BAR PLATE /////////////
                                                                // //////////////////////////////////////

                                                                    storeNavBarMainPlates[navBarNumberCounter]()

                                                            }



                                                        }


                                        }

                                        else {

                                            console.log("NAV BAR NOT FOUND")

                                        }

                            }

                }
















                

            // DETECT HEADER SECTION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectHeaderSection () {

                    var getHeaderSectionChildrenCount = getBody.children.length

                    var gatherSelectedSectionHeaderName = ""


                        for ( childrenCounter = 0; childrenCounter < getHeaderSectionChildrenCount; childrenCounter ++ ) {

                            var getHeaderSectionClassName = getBody.children[childrenCounter]

                                // CHECK IF CLASS NAME IS HEADER MATCH ------
                                // //////////////////////////////////////////

                                    if ( 
                                        
                                            getHeaderSectionClassName.className.includes("headerSection")
                                        
                                        ) 
                                        
                                    {

                                        console.log("HEADER EXISTS...")

                                        // GET MATCHING HEADER SECTION xxxxxx
                                        // //////////////////////////////////

                                            for ( classMatcherCounter = 0; classMatcherCounter < sectionLoopCounter; classMatcherCounter ++ ) {

                                                // CHECK WHICH HEADER SECTION NUMBER IT IS
                                                // //////////////////////////

                                                    if ( getHeaderSectionClassName.className == `headerSection${classNumberMapper[classMatcherCounter]}` ) {

                                                        console.log("GOT THE HEADER SECTION: " + classNumberMapper[classMatcherCounter])

                                                        gatherSelectedSectionHeaderName = `headerSection${classNumberMapper[classMatcherCounter]}`

                                                    }

                                                // IF NOT MATCHED THEN SKIP
                                                // ////////////////////////

                                                    else {

                                                        console.log("NO DIRECT MATCHES...")

                                                    }

                                            }

                                    }



                                // IF DOESNT MATCH OR EXIST -----------------
                                // //////////////////////////////////////////

                                    else {

                                        console.log("HEADER SECTION DOES NOT EXIST...")

                                    }

                        }



                        var getSelectedHeaderPlate = document.querySelector(`.${gatherSelectedSectionHeaderName}`)

                }







                








                

            // //////////////////////////////////////////////////////////////
            // DETECT CURRENT SIZE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                function detectCurrentWindowSize () {

                    // DECLARE PRIMARY VARIABLES ////////////////////////////
                    // //////////////////////////////////////////////////////

                        var windowWidth = window.innerWidth




                        // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // FOR SCREEN SIZE 300 --------------------------
                            // //////////////////////////////////////////////

                                if ( windowWidth > 0 && windowWidth < 300 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"

                                                    

                                                    

                                }

                            // FOR SCREEN SIZE 500 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 300 && windowWidth < 500 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"

                                                    

                                }

                            // FOR SCREEN SIZE 800 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 500 && windowWidth < 800 ) {

                                    console.log("500 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "300px"
                                            screenWidthResizerSelector = "276px"

                                                    

                                }

                            // FOR SCREEN SIZE 1000 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                    console.log("800 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "600px"
                                            screenWidthResizerSelector = "576px"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                    console.log("1000 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + -----------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"

                                                    

                                }

                }







                








                

            // //////////////////////////////////////////////////////////////
            // CREATE NAV BARS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////

                // CREATE NAV BAR ONE ACTUAL --------------------------------
                // //////////////////////////////////////////////////////////

                    function createNavBarOneMainPlate () {

                        // CREATE NAV BAR ONE ELEMENTS xxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////






                            // CREATE MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                var navBarPlateOneMainContainer = document.createElement("div")
                                navBarPlateOneMainContainer.className = `navBarOneMainContainer`

                                    var navBarPlateOneMainBlocker = document.createElement("div")
                                    navBarPlateOneMainBlocker.className = `navBarOneMainBackgroundBlocker`







                                        var navBarPlateOneMainElement = document.createElement("div")
                                        navBarPlateOneMainElement.className = `navBarOnePlateElementContainer`

                                            var navBarPlateOneElementResizer = document.createElement("div")
                                            navBarPlateOneElementResizer.className = `navBarOnePlateElementResizer`











                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                navBarPlateOneMainContainer.style = `
                                
                                    width:100%;
                                    top:0;
                                    left:0;
                                    right:0;
                                    margin:0px auto;
                                    z-index:2;
                                    position:fixed;
                                    transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;

                                `

                                    navBarPlateOneMainBlocker.style = `
                                    
                                        width:100%;
                                        height:50px;
                                        top:0;
                                        left:0;
                                        right:0;
                                        margin:0px auto;
                                        position:fixed;
                                        background:${storeNavBarThemeBackground[0]};
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        navBarPlateOneMainElement.style = `
                                        
                                            width:${screenWidthSelector};
                                            top:20px;
                                            left:0;
                                            right:0;
                                            margin:0px auto;
                                            padding:10px 0px;
                                            position:absolute;
                                            background:#FFFFFF;
                                            border-radius:1000px;
                                            box-shadow:0px 30px 30px -10px rgba(0,0,0,0.2);
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `


                                            navBarPlateOneElementResizer.style = `
                                            
                                                width:92%;
                                                height:50px;
                                                top:0;
                                                left:0;
                                                right:0;
                                                bottom:0;
                                                margin:auto;
                                                position:relative;
                                                background:#2C2C2C;
                                                border-radius:1000px;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `











                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                getNavBarOneCushion.appendChild(navBarPlateOneMainContainer)

                                    navBarPlateOneMainContainer.appendChild(navBarPlateOneMainBlocker)

                                        navBarPlateOneMainBlocker.appendChild(navBarPlateOneMainElement)



                                            navBarPlateOneMainElement.appendChild(navBarPlateOneElementResizer)

                    }









            















        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // FUNCTION AUTO RUNS ========================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            // RUN TEXT COLLECTIONS -------------------------------------
            // //////////////////////////////////////////////////////////

                getNavBarTitleTextItemFromTextDoc()
                getNavBarItemsFromTextDoc()

            // RUN SIZE DETECTION ---------------------------------------
            // //////////////////////////////////////////////////////////

                detectCurrentWindowSize()

            // RUN LIVING BAR -------------------------------------------
            // //////////////////////////////////////////////////////////
                
                detectLivingBar()

            // RUN LIVING HEADER SECTION --------------------------------
            // //////////////////////////////////////////////////////////

                detectHeaderSection()









            















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




                        // CHECK IF WINDOW IS IN SIZE xxxxxxxxxxxxxxxxxxxxxxx
                        // //////////////////////////////////////////////////

                            // FOR SCREEN SIZE 300 --------------------------
                            // //////////////////////////////////////////////

                                if ( windowWidth > 0 && windowWidth < 300 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"

                                                    

                                                    

                                }

                            // FOR SCREEN SIZE 500 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 300 && windowWidth < 500 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"

                                                    

                                }

                            // FOR SCREEN SIZE 800 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 500 && windowWidth < 800 ) {

                                    console.log("500 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "300px"
                                            screenWidthResizerSelector = "276px"

                                                    

                                }

                            // FOR SCREEN SIZE 1000 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                    console.log("800 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "600px"
                                            screenWidthResizerSelector = "576px"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                    console.log("1000 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + -----------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"

                                                    

                                }

                    })