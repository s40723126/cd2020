var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week 1', 'text': '創建cd2020的倉儲 \n 創倉儲 \n 步驟: \n 1.登入自己的Github創立一個叫cd2020的倉儲 \n 2.執行git clone  https://github.com/s40723126/cd2020 (自己的倉儲) \n 3.執行git submodule add  https://github.com/mdecourse/cmsimde 取得子模組 \n 4.將cmsimde-->up_dir中的所有東西複製到外面的cd2020裡 \n 5.之後cd cmsimde 輸入python -m pip install flask_cors更改模組 \n 6.執行python wsgi.py進入靜態網頁 \n', 'tags': '', 'url': 'Week 1.html'}, {'title': 'Week 2', 'text': '將python從3.7.3版本更新到3.8.2 \n 從 https://www.python.org/downloads/windows/ 這個網站中下載 \n windows x86-64 executable installer安裝至自己的可攜中 \n 將pip的選項取消掉 \n \n 使用Scite.exe將原本3.7.3的路徑改成3.8.2 \n \n 執行get-pip.py(取得安裝管理程式) \n \n \n 執行pip install 指令將 \n Flask \n Markdown \n lxml \n bs4 \n flask_cors \n pelican \n leo \n 這些python3.8.2缺少的模組給安裝下來 \n', 'tags': '', 'url': 'Week 2.html'}]};