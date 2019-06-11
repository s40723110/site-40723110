var tipuesearch = {"pages": [{'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}, {'title': '期末影片連結', 'text': '\n \n \n', 'tags': '', 'url': '期末影片連結.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境\xa0 \n 習得基本指令 \n C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '靜態CMSIMFLY操作', 'text': '決定序列 \n \n 編輯 \n \n 放置圖片 \n \n 放置影片 \n \n 左 :\xa0 可看到當下頁面的html的程式碼 \n 右 :\xa0 將文字轉換 程式語言 \n \n \n', 'tags': '', 'url': '靜態CMSIMFLY操作.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: \n git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add \n git commit\xa0 git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. 自行建立靜態內容管理網站 利用 CMSimfly ( https://github.com/chiamingyen/cmsimfly )\xa0內容, 建立自己的 \xa0 Github Pages \xa0 網站 \n \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': '網路連線設定', 'text': 'IPV4、IPV6網路設定 \n \n 控制器 >\xa0 網際網路選項 \n \n 選到「連線」列\xa0 >\xa0 LAN 設定 \n \n \n 位置輸入140.130.17.42\xa0 \xa0 \xa0 \xa0 連接 埠 輸入3128 \n \n 接著到乙太網路\xa0 ( 可左下搜尋 )\xa0 ，\xa0 右鍵點選內容 \n \n 「取消勾選」 IPV4之選項 ，\xa0 「勾選」IPV6 選項 \n \n 給予DNS伺服器:\xa0 2001:b000:168::1 \n \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': 'Ubuntu', 'text': '', 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'Ubuntu安裝與VirtualBox', 'text': '\n \xa0 \xa0 \xa0 \xa0 Ubuntu 安裝 :\xa0 \n \xa0 \xa0\xa0 \n  \xa0 \n \n \n Ubuntu sever \n \n \n \n \n \n \n \n Download :) \n \n \n \n \n 開啟之後，選擇 「NEW」 \n Name的部分請用「ub開頭」(系統會偵測) \n \n 接下來大約採取4000 MB\xa0 的容量 \n \n \n \n \n \n 再來大概抓個500G \n \n 創立完成後，選取該設定 \n 選取 「Network」， 選擇「Bridged\xa0 Adapter(橋接)」，\xa0 並選取自己當前的可用網路 \n \n 怎麼檢查呢??\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0「乙太網路」\xa0 \xa0--->\xa0 \xa0「變更介面卡選項 」\xa0 \xa0 \xa0 就可以檢查LO \n \n \n \n \n', 'tags': '', 'url': 'Ubuntu安裝與VirtualBox.html'}, {'title': 'VirtualBox設置', 'text': '\n 執行(start)之後，選擇「English」 \n \n Done 之後選擇 確定 Install ubuntu \n \n \n \n 因為剛剛之前已經選擇橋接( Bridged\xa0 Adapter) ， 所以上列確認已經連接到 \n \n \n \n 輸入可用的Proxy address \n \n \n 確認用整個 \n \n \n \n \n \n 輸入帳密 \n \n \n \n 此處要按「空白鍵」才能顯示「X」 \n \n \n \n \n \n 之後選擇重新開機~~ \n \n \n \n \n', 'tags': '', 'url': 'VirtualBox設置.html'}, {'title': '配置ubuntu 伺服', 'text': '\n \n', 'tags': '', 'url': '配置ubuntu 伺服.html'}, {'title': 'virtualbox 內部相關指令', 'text': '\n sudo :以管理員身分執行 \n 右ctrl\xa0 : 滑鼠被關在VB裡面時可以出來 \n sudo\xa0 apt install\xa0 :下載...... \n ifconfig\xa0 : 目前IP \n sudo netplan apply : 在 50-cloud-init.yaml改變IP時需要讓它過 \n 右ctrl\xa0 \xa0: 滑鼠被關在VB裡面時可以出來 \n cp : copy \n q!\xa0 : 跳出 \n sudo /etc/init.d/nginx restart\xa0 \xa0: 重啟nginx \n ls -l\xa0 :\xa0 列出當下的所有子資料 \n \n \n', 'tags': '', 'url': 'virtualbox 內部相關指令.html'}, {'title': '繪圖', 'text': '', 'tags': '', 'url': '繪圖.html'}, {'title': '國旗', 'text': '\n  導入 Brython 標準程式庫  \n \n \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n', 'tags': '', 'url': '國旗.html'}]};