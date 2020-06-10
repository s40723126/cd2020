var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week 1', 'text': '創建cd2020的倉儲 \n 創倉儲 \n 步驟: \n 1.登入自己的Github創立一個叫cd2020的倉儲 \n 2.執行git clone  https://github.com/s40723126/cd2020 (自己的倉儲) \n 3.執行git submodule add  https://github.com/mdecourse/cmsimde 取得子模組 \n 4.將cmsimde-->up_dir中的所有東西複製到外面的cd2020裡 \n 5.之後cd cmsimde 輸入python -m pip install flask_cors更改模組 \n 6.執行python wsgi.py進入靜態網頁 \n', 'tags': '', 'url': 'Week 1.html'}, {'title': 'Week 2', 'text': '將python從3.7.3版本更新到3.8.2 \n 從 https://www.python.org/downloads/windows/ 這個網站中下載 \n windows x86-64 executable installer安裝至自己的可攜中 \n 將pip的選項取消掉 \n \n 使用Scite.exe將原本3.7.3的路徑改成3.8.2 \n \n 執行get-pip.py(取得安裝管理程式) \n \n \n 執行pip install 指令將 \n Flask \n Markdown \n lxml \n bs4 \n flask_cors \n pelican \n leo \n 這些python3.8.2缺少的模組給安裝下來 \n \n', 'tags': '', 'url': 'Week 2.html'}, {'title': 'Week4', 'text': '更新至python 3.8.2後,沒辦法打開Leo \n 解決方法: \n 1.打開start_mdecourse.bat \n 2.進入SCiTE程式編輯器,點選Options後,點選Open python properties \n \n 3.使用Ctrl+H,將py373更改為python38(看個人的python3.8.2檔案名打什麼) \n \n 4.之後將launchleo.pypy放到SCiTE程式編輯器後就能開啟leo Editor \n', 'tags': '', 'url': 'Week4.html'}, {'title': 'Week5', 'text': '\n 4/1放假 \n', 'tags': '', 'url': 'Week5.html'}, {'title': 'Week6', 'text': '使用 Youtube & OBS Portable 進行直播串流 \n \n 之後將使用 google hangout meet 進行線上授課 \n pyslvs.exe \n \n', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week8', 'text': '', 'tags': '', 'url': 'Week8.html'}, {'title': 'Week9', 'text': '', 'tags': '', 'url': 'Week9.html'}, {'title': 'Week10', 'text': '', 'tags': '', 'url': 'Week10.html'}, {'title': 'Week11', 'text': '用Onshape繪製輪框 \n 網址: https://cad.onshape.com/documents/ad12c3f2d195fcb853e024ef/w/feb2971ffd74f2fb21b3551c/e/4f4758f0b1b2b6db33b725a1 \n \n', 'tags': '', 'url': 'Week11.html'}, {'title': 'Week12', 'text': '小組會議: \n 討論內容: \n 討論四輪車工作分配 \n 線上課程操作說明 \n \n', 'tags': '', 'url': 'Week12.html'}, {'title': 'Week13', 'text': '用Onshape繪製輪胎皮 \n 網址: \n https://cad.onshape.com/documents/631340e74e6be09636ce6638/w/5de772e304b3a44bb6babf30/e/d32210c491a00ef63329a42a \n \n', 'tags': '', 'url': 'Week13.html'}, {'title': '小組會議', 'text': 'Week3 \n \n Week4 \n \n Week7 \n \n', 'tags': '', 'url': '小組會議.html'}, {'title': '翻譯', 'text': '1.2 Defining the Overall Team \n 1.2定義整體團隊 \n The intent of this section is to show that engineering (and mechanical engineering in particular) doesn’t design products by themselves; they are certainly a part of a team. Characteristics of the overall team are that the team can be: \n 本部分的目的是表明工程（尤其是機械工程）不是自己設計產品； 他們當然是團隊的一部分。 整個團隊的特徵是團隊可以是： \n • Of a small or large size \n •小的尺寸或大的尺寸 \n • Located in one location or distributed worldwide \n •位於一個位置或分佈在全球 \n • Limited in resources or have access to almost unlimited resources \n •資源有限或可以訪問幾乎無限的資源 \n • In possession of the latest tools, or not \n •是否擁有最新工具 \n •Motivated by a variety of reasons for accomplishing their goal \n •出於各種原因而實現目標的動機 \n • Varying in experience \n •經驗豐富 \n The entire engineering effort consists of an amalgam of design among several disciplines. These disciplines include: \n 整個工程工作包括多個學科之間的設計融合。這些學科包括： \n • Electrical engineering \n •電氣工程 \n • Software and firmware engineering \n •軟件和固件工程 \n • Mechanical engineering (including structural and thermal) \n •機械工程（包括結構和熱學） \n • Industrial engineering \n •工業工程 \n • System engineering \n • 系統工程 \n Therefore, it is recognized that mechanical engineering is only a part of the overall engineering design of an electronic product, and many of the decisions made are in cooperation with the other disciplines. Contemporary product design should balance various trade-offs among all of the factors that go into the production released product. \n 因此，已經認識到機械工程只是電子產品整體工程設計的一部分，並且許多決策是與其他學科合作制定的。 當代產品設計應在投入生產的產品的所有因素之間權衡取捨。 \n Indeed, the entire engineering effort (all of the disciplines from Sect. 1.2) is only a part of the overall effort that goes into the release (sale) of a product. \n 確實，整個工程工作（來自第1.2節的所有學科）只是產品發布（銷售）的全部工作的一部分 \n Besides the engineering effort, contributions result from the following groups: \n 除工程上的努力外，以下小組也做出了貢獻： \n Each group is defined, followed by how specifically the mechanical design “interacts” with that group. All of this is meant to emphasize that the mechanical design is not done “in a vacuum” but rather as part of a multitasked product delivery team. \n 定義每個組，然後定義機械設計與該組“交互”的具體方式。 所有這些都是為了強調機械設計不是“在真空中”完成的，而是作為多任務產品交付團隊的一部分。 \n Marketing (Including Input from Sales) This organization is responsible for the product definition, that is, defining what the customer wants and what the product will be from the customer viewpoint. This “product definition” usually takes the form of a document that engineering will accept as the product requirements. Marketing also has the responsibility of overseeing how a particular product will fit into the overall product line of the company (or division of the company). \n 市場營銷（包括來自銷售的投入）該組織負責產品定義，即從客戶的角度定義客戶想要什麼以及產品將是什麼。 該“產品定義”通常採用工程形式將作為產品要求接受的文檔的形式。 營銷還負責監督特定產品如何適合公司的整個產品線（或公司的部門）。 \n The EPE Designer interacts with Marketing in the effort to define how the product will function, how that functionality will present itself to the customer (user interface), and how the product will look to the customer (industrial design). \n EPE設計人員與市場營銷人員進行交互，以定義產品的功能，向客戶展示該功能的方式（用戶界面）以及產品對客戶的外觀（工業設計）。 \n Operations (Manufacturing) This organization is responsible for the complete flow of materials for individual components and how those individual components get fabricated, assembled, and delivered to the customer. If engineering’s responsibility is to produce the product documentation, operations should be able to take that documentation and get that product produced that meets the product specifications. \n 運營（製造）該組織負責單個組件的完整材料流程，以及如何製造，組裝和交付這些單個組件給客戶。 如果工程師的職責是生產產品文檔，則操作人員應該能夠獲取該文檔，並生產出符合產品規格的產品。 \n The EPE Designer intersects with operations by making decisions on part fabrication techniques, vendor (supplier) selection, and any trade-offs between quality/ cost/appearance. \n EPE設計人員通過對零件製造技術，供應商（供應商）選擇以及質量/成本/外觀之間的任何取捨做出決策來與運營相交。 \n Testing (Design Verification) This organization is responsible for testing both the prototyping and mature designs. This can be accomplished by resources within the mechanical design group (itself) or by an independent group setup for this particular function. \n 測試（設計驗證）該組織負責測試原型設計和成熟設計。 這可以通過機械設計組（本身）中的資源或為此特定功能的獨立組設置來完成。 \n The EPE Designer intersects with the test function by either conducting or reviewing test results. The testing done on the product is actually a part of the product requirements document (PRD) and that it must be proven that the product passes testing as defined in that document. For example, if the PRD states that a product must survive a one meter drop, then a test must be defined that states considerations such as: \n EPE設計器通過執行或查看測試結果來與測試功能相交。 在產品上進行的測試實際上是產品需求文檔（PRD）的一部分，必須證明該產品通過了該文檔中定義的測試。 例如，如果PRD聲明產品必須承受一米高的跌落，則必須定義一項測試，其中包括以下注意事項： \n • How many drops of a single item (under test) \n •單個物品有多少水滴（測試中） \n • Impact faces or corners of that item \n •物品的撞擊面或角落 \n • Environment that testing is to take place (such as ambient temperature) \n •進行測試的環境（例如環境溫度） \n • Statistical concerns (such as how many single items must pass testing) \n •統計問題（例如必須通過測試的單個項目數） \n • Order of testing (among various tests that unit will undergo) \n •測試順序（單元將進行的各種測試中） \n • Definition of “survive” (degree of functionality or appearance after test) \n •“生存”的定義（測試後功能或外觀的程度） \n Quality Control/Quality Assurance This organization determines whether the acceptability limits of the individual parts (or entire assemblies) meet the standards both specified in the individual product specification (the drawing) and in the established overall corporate standards. Quality control would be concerned with tactical situations, while (corporate) quality assurance would be more concerned with strategic situations. Most companies have various ways of both controlling and monitoring the quality of the product and certainly get involved with customer satisfaction and service issues. \n 質量控制/質量保證該組織確定單個零件（或整個組件）的可接受極限是否滿足單個產品規格（圖紙）和已建立的總體公司標準中指定的標準。 質量控制將與戰術情況有關，而（公司）質量保證將與戰略情況有關。 大多數公司都有控制和監視產品質量的各種方法，並且肯定會涉及客戶滿意度和服務問題。 \n The EPE Designer intersects with this organization by specifying on their documentation the acceptability limits of each part and can go all up to include assemblies. Typically, acceptability limits take the form of: \n EPE設計人員通過在其文檔中指定每個零件的可接受性限制來與該組織相交，並且可以一併包括裝配。 通常，可接受性限制採取以下形式： \n • Size (geometry) control as specified in drawing tolerances \n •圖紙公差中指定的尺寸（幾何）控件 \n • Material and plating specifications stated on drawing \n •圖紙上註明的材料和鍍層規格 \n • Cosmetic flaw rejection criteria stated on drawing \n •圖紙上規定的外觀缺陷排除標準 \n • Functional specification as stated on drawing \n •功能規格如圖紙所示 \n • Determining the “critical” nature of some aspect of the part documentation. \n •確定零件文檔某些方面的“關鍵”性質。 \n Service This organization is responsible for the repairing, warranty, and return of product functions. They help determine course of action for field problems with the equipment. \n 服務該組織負責產品功能的維修，保修和退貨。 它們有助於確定設備現場問題的解決方案。 \n The EPE Designer intersects with this organization by designing-in a reasonable process for the disassembly and repair of the product. Of course, a design with a designed-in high reliability will have less reason to repair. It’s also possible to provide for methodology to determine misuse of the product. \n EPE設計人員通過設計合理的過程來拆卸和維修產品，從而與此組織相交。 當然，設計可靠的設計將減少維修的理由。 還可以提供確定產品濫用的方法。 \n Project Management This organization is responsible for tracking the project for: \n 項目管理該組織負責跟踪以下項目： \n • Time allocation – meeting deadlines that are committed \n •時間分配-遵守約定的最後期限 \n • Resource allocation \n • 資源分配 \n • Priority management (for a single project and relative to projects competing for the same resources) \n •優先級管理（針對單個項目以及相對於爭奪相同資源的項目） \n • Compliance to specifications for the product \n •符合產品規格 \n • Meeting cost goals \n •實現成本目標 \n • Reporting status of project \n •項目報告情況 \n The EPE Designer intersects with this organization by reporting estimates of time and resources for all separate line items of the mechanical part responsibility. This starts with product conceptualization, design, prototyping, and testing and continues on into final release documentation. Estimates of time and resources are updated as milestones are met. \n EPE設計人員通過報告機械零件責任的所有單獨行項目的時間和資源估算與該組織相交。 這從產品概念化，設計，原型設計和測試開始，一直到最終版本文檔。 隨著里程碑的實現，時間和資源的估計也會更新。 \n Upper Management Included in this group is anyone who is responsible for the project and has a need to understand the project. Project updates would be provided to this group at specific times during the project. Upper management would provide leadership and vision to the project. \n 高層管理人員包括負責該項目並需要了解該項目的任何人。 項目更新將在項目期間的特定時間提供給該小組。 高層管理人員將為項目提供領導力和遠見。 \n The EPE Designer intersects with upper management in an indirect manner. Reporting of project status is relevant at any time and is usually provided thru the project manager. \n EPE設計器以間接方式與高層管理人員相交。 項目狀態的報告在任何時候都是相關的，通常是通過項目經理提供的。', 'tags': '', 'url': '翻譯.html'}]};