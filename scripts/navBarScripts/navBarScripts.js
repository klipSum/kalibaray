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
                        var navItemLinksStringCollector = ""
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

                        var getNavBarLogoAndTitleSideSizing = "50%"
                        var getNavBarMenuItemsSideSizing = "50%"

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
                var storeNavBarItemLinks = []
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

                        "#B35151", "#DF7cDF", "#2824C9", "#FEAB3D", "#86fe3d"

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

                // GET NAV BAR ITEMS FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarItemsFromTextDoc () {

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









                        // RUN AUTO RUN FUNCTIONS AFTER DELAY ---------------
                        // //////////////////////////////////////////////////

                            setTimeout(() => {



                                // RUN SIZE DETECTION -----------------------
                                // //////////////////////////////////////////
                    
                                    detectCurrentWindowSize()
                    
                                // RUN LIVING BAR ---------------------------
                                // //////////////////////////////////////////
                                    
                                    detectLivingBar()
                    
                                // RUN LIVING HEADER SECTION ----------------
                                // //////////////////////////////////////////
                    
                                    detectHeaderSection()


                                
                            }, 200);






                    }




                // GET NAV BAR TITLE FROM TEXT DOC //////////////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarTitleTextItemFromTextDoc () {

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



                    

                // GET NAV BAR MENU ITEM LINKS FROM TEXT DOC ////////////////
                // //////////////////////////////////////////////////////////

                    function getNavBarItemLinksFromTextDoc () {

                        // RUN FETCH FROM TEXT DOC --------------------------
                        // //////////////////////////////////////////////////

                            // FETCH DOC AND STORE IN TEMP MEMORY xxxxxxxxxxx
                            // //////////////////////////////////////////////


                                fetch("dox/navBarTexts/navOneTexts/navBarOneItemLinksText.txt")
                                .then(res => res.text())
                                .then((text) => {


                                    // SET TEXT TO STRING AND MAKE READY FOR SPLITS
                                    // //////////////////////////////////////

                                        navItemLinksStringCollector = text


                                            // CHECK IF TEXT CAPTURE IS EMPTY
                                            // //////////////////////////////

                                                if ( navItemLinksStringCollector == "" ) {

                                                    for ( navBarDummyPopulate = 0; navBarDummyPopulate < 5; navBarDummyPopulate++ ) {
            
                                                        storeNavBarItemLinks.push(`item${classNumberMapper[navBarDummyPopulate]}`)
            
                                                    }

                                                }

                                            // AND IF TEXT CAPTURE HAS ITEMS
                                            // //////////////////////////////

                                                else {

                                                    // FIRST EMPTY UP NAV BAR STORAGE ARRAY
                                                    // //////////////////////

                                                        storeNavBarItemLinks = []

                                                    // THEN POPULATE NAV BAR ITEMS ARRAY
                                                    // //////////////////////

                                                        var navBarItemLinksSplits = navItemLinksStringCollector.split(",").length
                                                        var navBarItemLinksSplitsFilter = navItemLinksStringCollector.split(",")
                
                                                        for ( navBarItemLinksCounter = 0; navBarItemLinksCounter < navBarItemLinksSplits; navBarItemLinksCounter++ ) {
                
                                                            storeNavBarItemLinks.push(navBarItemLinksSplitsFilter[navBarItemLinksCounter])
                
                                                        }

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


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                                    

                                }

                            // FOR SCREEN SIZE 500 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 300 && windowWidth < 500 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 800 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 500 && windowWidth < 800 ) {

                                    console.log("500 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "300px"
                                            screenWidthResizerSelector = "276px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 1000 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                    console.log("800 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "600px"
                                            screenWidthResizerSelector = "576px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "40%"
                                            getNavBarMenuItemsSideSizing = "60%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                    console.log("1000 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "30%"
                                            getNavBarMenuItemsSideSizing = "70%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + -----------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "30%"
                                            getNavBarMenuItemsSideSizing = "70%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

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





                            // CREATE MAIN NAV BAR PLATE ELEMENT AND RESIZER 
                            // //////////////////////////////////////////////

                                var navBarPlateOneMainElement = document.createElement("div")
                                navBarPlateOneMainElement.className = `navBarOnePlateElementContainer`

                                    var navBarPlateOneElementResizer = document.createElement("div")
                                    navBarPlateOneElementResizer.className = `navBarOnePlateElementResizer`





                            // CREATE MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                            // //////////////////////////////////////////////

                                var navBarPlateOneLogoTitleSide = document.createElement("div")
                                navBarPlateOneLogoTitleSide.className = `navBarOnePlateElementLogoTitleSideContainer`

                                var navBarPlateOneDesktopMenuItemsSide = document.createElement("div")
                                navBarPlateOneDesktopMenuItemsSide.className = `navBarOnePlateElementDesktopMenuItemsSideContainer`

                                var navBarPlateOneMobileMenuItemsSide = document.createElement("div")
                                navBarPlateOneMobileMenuItemsSide.className = `navBarOnePlateElementMobileMenuItemsSideContainer`





                            // CREATE NAV BAR LOGO AND TITLE ITEMS xxxxxx
                            // //////////////////////////////////////////

                                var createNavBarLogoContainer = document.createElement("div")
                                createNavBarLogoContainer.className = `navBarOneLogoContainer`

                                    var createNavBarLogoActual = document.createElement("div")
                                    createNavBarLogoActual.className = `navBarOneLogoActual`


                                
                                var createNavBarTitleContainer = document.createElement("div")
                                createNavBarTitleContainer.className = `navBarOneTitleContainer`

                                    var createNavBarTitleActual = document.createElement("div")
                                    createNavBarTitleActual.className = `navBarOneTitleActual`






                            // CREATE NAV BAR MENU ITEMS MOBILE xxxxxxxxx
                            // //////////////////////////////////////////

                                var createNavBarMenuItemsMobileButtonContainer = document.createElement("div")
                                createNavBarMenuItemsMobileButtonContainer.className = `navBarOneMenuItemsButtonContainer`

                                    var createNavBarMenuItemsMobileButtonIconMover = document.createElement("div")
                                    createNavBarMenuItemsMobileButtonIconMover.className = `navBarOneMenuItemsButtonIconMover`



                                        var createNavBarMenuItemsmobileButtonIconLineOne = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineOne.className = `navBarOneMenuItemsButtonIconLineOne`

                                        var createNavBarMenuItemsmobileButtonIconLineTwo = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineTwo.className = `navBarOneMenuItemsButtonIconLineTwo`

                                        var createNavBarMenuItemsmobileButtonIconLineThree = document.createElement("div")
                                        createNavBarMenuItemsmobileButtonIconLineThree.className = `navBarOneMenuItemsButtonIconLineThree`

























                        

                            // STYLE MAIN NAV BAR PLATE AND ELEMENTS ========
                            // //////////////////////////////////////////////

                                // STYLE MAIN NAV BAR ELEMENTS xxxxxxxxxxxxxx
                                // //////////////////////////////////////////

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



                                // STYLE MAIN NAV BAR PLATE ELEMENT AND RESIZER
                                // //////////////////////////////////////////


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



                                // STYLE MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                                // //////////////////////////////////////////

                                    navBarPlateOneLogoTitleSide.style = `
                                    
                                        width:${getNavBarLogoAndTitleSideSizing};
                                        height:50px;
                                        float:left;
                                        position:relative;
                                        background:#564456;
                                        transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;

                                    `

                                        // STYLE MAIN NAV BAR LOGO AND TITLE ITEMS
                                        // //////////////////////////////////

                                            createNavBarLogoContainer.style = `
                                            
                                                width:40%;
                                                height:50px;
                                                float:left;
                                                position:relative;
                                                background:#3a885a;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                createNavBarLogoActual.style = `
                                                
                                                    width:100%;
                                                    height:50px;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    position:absolute;
                                                    background:#df7cdf;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `


                                            createNavBarTitleContainer.style = `
                                            
                                                width:60%;
                                                height:50px;
                                                float:left;
                                                position:relative;
                                                background:#7c9adf;
                                                transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;

                                            `

                                                createNavBarTitleActual.style = `
                                                
                                                    width:100%;
                                                    height:50px;
                                                    coolor:#2C2C2C;
                                                    position:relative;
                                                    font-size:15px;
                                                    text-align:center;
                                                    font-weight:700;
                                                    font-family:arial, sans-serif;
                                                    line-height:50px;
                                                    letter-spacing:1px;
                                                    text-transform:lowercase;
                                                    transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;

                                                `













                                // STYLE MAIN NAV BAR MENU ITEMS SIDES xxxxxx
                                // //////////////////////////////////////////




                                    // STYLE NAV BAR DESKTOP MENU ITEMS SIDE 
                                    // //////////////////////////////////////

                                        navBarPlateOneDesktopMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarDesktopMenuItemsSetting};
                                            background:#3C5472;
                                            text-align:right;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `




                                    // STYLE NAV BAR MOBILE MENU ITEMS SIDE -
                                    // //////////////////////////////////////

                                        navBarPlateOneMobileMenuItemsSide.style = `
                                        
                                            width:${getNavBarMenuItemsSideSizing};
                                            height:50px;
                                            float:right;
                                            display:${getNavBarMobileMenuItemsSetting};
                                            background:#3A5688;
                                            position:relative;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        `

                                            // CREATE SIDE MENU /////////////
                                            // //////////////////////////////






                                            // STYLE MOBILE ITEMS MENU ICON ELEMENTS
                                            // //////////////////////////////

                                                createNavBarMenuItemsMobileButtonIconMover.style = `
                                                
                                                    

                                                `














                                












                                // STYLE MAIN NAV BAR LOGO AND TITLE ITEMS xx
                                // //////////////////////////////////////////











                            // STYLE NAV BAR MENU ITEMS DESKTOP xxxxxxxxx
                            // //////////////////////////////////////////

                                



                                                





                            // STYLE NAV BAR MENU ITEMS MOBILE xxxxxxxxxx
                            // //////////////////////////////////////////

                                            




















                        

                            // ADD TEXT TO ITEMS ============================
                            // //////////////////////////////////////////////

                                createNavBarTitleActual.textContent = `${navTitleStringCollector}`

                                            




















                        

                            // APPEND MAIN NAV BAR PLATE AND ELEMENTS =======
                            // //////////////////////////////////////////////

                                getNavBarOneCushion.appendChild(navBarPlateOneMainContainer)

                                    navBarPlateOneMainContainer.appendChild(navBarPlateOneMainBlocker)



                            // APPEND MAIN NAV BAR PLATE ELEMENT AND RESIZER
                            // //////////////////////////////////////////

                                navBarPlateOneMainBlocker.appendChild(navBarPlateOneMainElement)

                                    navBarPlateOneMainElement.appendChild(navBarPlateOneElementResizer)



                            // APPEND MAIN NAV BAR LOGO AND MENU ITEMS SIDES
                            // //////////////////////////////////////////

                                navBarPlateOneElementResizer.appendChild(navBarPlateOneLogoTitleSide)


                                    // APPEND MAIN NAV BAR LOGO AND TITLE ITEMS
                                    // //////////////////////////////////

                                        navBarPlateOneLogoTitleSide.appendChild(createNavBarLogoContainer)

                                            createNavBarLogoContainer.appendChild(createNavBarLogoActual)
                                        

                                        navBarPlateOneLogoTitleSide.appendChild(createNavBarTitleContainer)

                                            createNavBarTitleContainer.appendChild(createNavBarTitleActual)






                                    // APPEND MAIN NAV BAR MENU ITEMS CONTAINERS
                                    // //////////////////////////////////

                                        navBarPlateOneElementResizer.appendChild(navBarPlateOneDesktopMenuItemsSide)

                                            // RUN LOOP TO APPEND MENU ITEMS
                                            // //////////////////////////

                                                for ( itemsGenerateCounter = 0; itemsGenerateCounter < 5; itemsGenerateCounter ++ ) {


                                                    // CHECK IF NAV MENU ITEMS ARE INVALID OR DON'T EXIST
                                                    // /////////////////////////////////

                                                        if ( 
                                                            
                                                                storeNavBarItems[itemsGenerateCounter] == null || 
                                                                storeNavBarItems[itemsGenerateCounter] == undefined
                                                            
                                                            ) 
                                                            
                                                        {
                                                            
                                                        }


                                                    // CHECK IF NAV MENU ITEMS ARE VALID OR EXISTS
                                                    // /////////////////////////////////

                                                        else {

                                                            // CREATE NEW ITEMS FOR DESKTOP MENU
                                                            // //////////////////////

                                                                var createNavBarOneMenuItem = document.createElement("div")
                                                                createNavBarOneMenuItem.className = `navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Container`

                                                                    var createNavBarOneMenuItemResizer = document.createElement("div")
                                                                    createNavBarOneMenuItemResizer.className = `navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Resizer`



                                                            // STYLE NEW ITEMS FOR DESKTOP MENU
                                                            // /////////////////////////////////

                                                                createNavBarOneMenuItem.style = `
                                                                
                                                                    width:20%;
                                                                    height:50px;
                                                                    cursor:pointer;
                                                                    display:inline-block;
                                                                    position:relative;
                                                                    background:${storeNavBarThemeBackground[itemsGenerateCounter]};
                                                                    transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;

                                                                `

                                                                    createNavBarOneMenuItemResizer.style = `
                                                                    
                                                                        height:50px;
                                                                        color:#2C2C2C;
                                                                        font-size:15px;
                                                                        font-weight:700;
                                                                        font-family:arial, sans-serif;
                                                                        line-height:50px;
                                                                        text-align:center;
                                                                        letter-spacing:2px;
                                                                        transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;

                                                                    `



                                                            // ADD TEXT TO MENU ITEM BLOCK =====
                                                            // /////////////////////////////////

                                                                createNavBarOneMenuItemResizer.textContent = `${storeNavBarItems[itemsGenerateCounter]}`



                                                            // STORE MENU ITEM CLASSNAME IN ARRAY
                                                            // /////////////////////////////////


                                                                storeNavBarItemsClassNames.push(`navBarOneMenuItem${classNumberMapper[itemsGenerateCounter]}Container`)



                                                            // APPEND MENU ITEM BLOCKS TO DESKTOP SIDE CONTAINER
                                                            // /////////////////////////////////

                                                                navBarPlateOneDesktopMenuItemsSide.appendChild(createNavBarOneMenuItem)

                                                                    createNavBarOneMenuItem.appendChild(createNavBarOneMenuItemResizer)



                                                        }


                                                }


                                



                                    // ASSIGN EVENT LISTENERS TO NEWLY CREATED MENU ELEMENTS
                                    // //////////////////////////////////

                                        storeNavBarItemsClassNames.forEach((navItem) => {

                                            var getCurrentMenuItem = document.querySelector(`.${navItem}`)

                                            getCurrentMenuItem.addEventListener("click", function () {

                                                window.open(`${storeNavBarItemLinks[storeNavBarItemsClassNames.indexOf(navItem)]}`, `_blank`)

                                            })

                                        })

                                        


                                



                                    // APPEND MAIN NAV BAR MENU ITEMS CONTAINERS
                                    // //////////////////////////////////

                                        navBarPlateOneElementResizer.appendChild(navBarPlateOneMobileMenuItemsSide)



                    }









            















        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // FUNCTION AUTO RUNS ========================================================================
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            // RUN TEXT COLLECTIONS -------------------------------------
            // //////////////////////////////////////////////////////////

                getNavBarTitleTextItemFromTextDoc()
                getNavBarItemLinksFromTextDoc()
                getNavBarItemsFromTextDoc()









            















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


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                                    

                                }

                            // FOR SCREEN SIZE 500 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 300 && windowWidth < 500 ) {

                                    console.log("300 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "200px"
                                            screenWidthResizerSelector = "176px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 800 --------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 500 && windowWidth < 800 ) {

                                    console.log("500 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "300px"
                                            screenWidthResizerSelector = "276px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "80%"
                                            getNavBarMenuItemsSideSizing = "20%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "none"
                                            getNavBarMobileMenuItemsSetting = "inline-table"

                                                    

                                }

                            // FOR SCREEN SIZE 1000 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 800 && windowWidth < 1000 ) {

                                    console.log("800 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "600px"
                                            screenWidthResizerSelector = "576px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "40%"
                                            getNavBarMenuItemsSideSizing = "60%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 -------------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1000 && windowWidth < 1200 ) {

                                    console.log("1000 LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "30%"
                                            getNavBarMenuItemsSideSizing = "70%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

                                }

                            // FOR SCREEN SIZE 1200 + -----------------------
                            // //////////////////////////////////////////////

                                else if ( windowWidth > 1200 ) {

                                    console.log("BEYOND LOCKED IN...")

                                        // UPDATE WINDOW SIZE FOR COLLECTOR x
                                        // //////////////////////////////////

                                            screenWidthSelector = "800px"
                                            screenWidthResizerSelector = "776px"


                                        // UPDATE LOGO TITLE AND MENU ITEMS SIZING
                                        // //////////////////////////////////

                                            getNavBarLogoAndTitleSideSizing = "30%"
                                            getNavBarMenuItemsSideSizing = "70%"

                                        // UPDATE MOBILE AND DESKTOP MENU ITEMS DISPLAY SETTINGS
                                        // //////////////////////////////////

                                            getNavBarDesktopMenuItemsSetting = "inline-table"
                                            getNavBarMobileMenuItemsSetting = "none"

                                                    

                                }

                    })