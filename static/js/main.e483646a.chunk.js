(this["webpackJsonpwww.richychen.com"]=this["webpackJsonpwww.richychen.com"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(19),r=a.n(i),s=(a(27),a(2)),l=a(3),c=a(5),h=a(4),m=a(6),d=a(13),u=a(10),p=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){a.setState({showMenu:!a.state.showMenu})},a.menu=function(){return n.a.createElement("div",{onClick:a.handleClick,className:"menu"},a.profile(),n.a.createElement("div",{className:"page-links font"},n.a.createElement("a",{href:"/#hello"},"Hello"),n.a.createElement("a",{href:"/resume.pdf",target:"_blank"},"Resume"),n.a.createElement("a",{href:"/#projects"},"Projects"),n.a.createElement("a",{href:"/#books"},"Reading"),n.a.createElement("a",{href:"/#blogs"},"Writing")))},a.state={showMenu:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"profile",value:function(){return n.a.createElement("div",{className:"mobile profile"},n.a.createElement("i",{onClick:this.handleClick,className:"close icon"}),n.a.createElement(d.b,{to:"/",className:"font no-underline"},"Richy Chen"),n.a.createElement("div",{className:"links"},n.a.createElement("a",{className:"button",href:"mailto:richychn@hotmail.com",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"envelope icon"})),n.a.createElement("a",{className:"button",href:"https://github.com/richychn",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"github icon"})),n.a.createElement("a",{className:"button",href:"http://www.linkedin.com/in/richychen",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"linkedin icon"})),n.a.createElement("a",{className:"button",href:"http://www.twitter.com/richychn",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"twitter icon"}))))}},{key:"render",value:function(){return this.state.showMenu?this.menu():n.a.createElement("div",{className:"mobile sidebar ".concat(this.props.hidden?"hidden":"")},n.a.createElement(d.b,{to:"/",className:"font no-underline"},"Richy Chen"),n.a.createElement("i",{onClick:this.handleClick,className:"bars icon"}))}}]),t}(n.a.Component)),g=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"sidebar ".concat(this.props.bio)},n.a.createElement("h3",null,"Richy Chen"),n.a.createElement("div",{className:"links"},n.a.createElement("a",{className:"button",href:"mailto:chenrichy@outlook.com",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"envelope icon"})),n.a.createElement("a",{className:"button",href:"https://github.com/richychn",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"github icon"})),n.a.createElement("a",{className:"button",href:"http://www.linkedin.com/in/richychen",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"linkedin icon"})),n.a.createElement("a",{className:"button",href:"http://www.twitter.com/richychn",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"twitter icon"}))),n.a.createElement("div",{className:"page-links font"},n.a.createElement("a",{href:"/#/hello"},"Hello"),n.a.createElement("a",{href:"/resume.pdf",target:"_blank"},"Resume"),n.a.createElement("a",{href:"/#/projects"},"Projects"),n.a.createElement("a",{href:"/#/books"},"Reading"),n.a.createElement("a",{href:"/#/blogs"},"Writing")))}}]),t}(n.a.Component)),f=(a(35),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("sidebar")[0].classList.add("bio")}},{key:"componentWillUnmount",value:function(){document.getElementsByClassName("sidebar")[0].classList.remove("bio")}},{key:"render",value:function(){return n.a.createElement("div",{className:"bio"},n.a.createElement("div",{style:{backgroundImage:'url("profile.jpg")'},className:"gradient img"},n.a.createElement("div",{className:"gradient overlay"})),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"font"},"Hello!"),n.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:w.text}})))}}]),t}(n.a.Component)),w={text:"<p>I'm Richy. I'm a senior at Claremont McKenna College studying Computer Science and Economics. I think it would be incredibly cool to design something that affects a lot of people's lives. I jot down a lot of these ideas and will happily dream out an idea with anyone.</p>    <p>Currently, I am hooked by the idea of designing systems that cross digital and physical environments and use software to empower regular, physical activities, such as shopping, eating at restaurants, or going to work. To that end, I am working with my friends to develop an app for restaurant customers. More on that <a href=\"/#/blogs/0\">here</a>.</p>    <p>After having my job offer rescinded due to COVID-19, I am currently looking for roles in software engineering.</p>"},y=f,b=(a(36),"<p>A project I did with four friends in class, Market Modeling is a web app showing the results of a research project on machine learning and markets data. We tested variations of two models, Echo State Networks and Long Short Term Memory, to try to predict stock and other markets data. Google Colab was a very helpful tool for costless testing of our models on GPU machines.</p>    <p>Unfortunately, we began this project with very little domain knowledge and picked variables that theoretically strongly correlated with each other. As a result, our strategy of using multiple variables to predict multiple variables was not effective with our data. However, the process of making and testing two models allowed us to learn a lot about the models. Echo State Networks, being a fairly new development, was especially interesting.</p>    <p>We also used this opportunity to practice designing a website and creating the front end, something I do not work on often. We learned AJAX to make requests without disrupting the user flow, and used Chartist.js to create beautiful graphs in HTML. Our website was made with Python Flask and hosted on Heroku.</p>    <p><a target='_blank' href='http://market-modeling.herokuapp.com'>Check it out!</a></p>"),k="<p>My first iPhone application was built during the CalTech hackathon in 2019. My friends and I completed a Swift tutorial in the month beforehand to prepare for the hackathon. During the hackathon, we built a simple image recognition machine learning model to recognize photos of notes, whiteboards, or blackboards. This camera app would automatically separate such photos from others. We also implemented a quick way of tagging and searching for photos.</p>    <p><a target='_blank' href='https://github.com/richychn/photo-ally'>Check out the repository!</a></p>",v="<p>I first learned to develop web applications at the LeWagon bootcamp in Lisbon, where I was part of batch 86. For my capstone project, I worked with a team to build an online forum for musicians to share their practice and learning. We used Ruby on Rails and hosted it on Heroku.</p>    <p><a target='_blank' href='http://guitwise.herokuapp.com'>Check it out!</a></p>",I="<p>Launch Workstation is a Chrome extension that enables users to quickly open a set of websites. This helps with opening up Chrome and with switching between tasks. </p>    <p>I first messed around with Chrome extensions when I learned web development, but I did not have a good idea for one that hadn't already been done, until this project. Launch Workstation is primarily a tool for myself. I built the first version in less than 24 hours. I plan to only add features if more people start using it or if I need more features.</p>    <p>Please check it out on the Chrome extension store <a target='_blank' href='https://www.richychen.com/#/launch-workstation'>here</a></p>    <p>Or if you want to see how I made it, check out my Github <a target='_blank' href='https://github.com/richychn/launch-workstation'>here</a></p>",E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderLaunchWorkstation",value:function(){return n.a.createElement("div",{className:"project"},n.a.createElement("h3",null,"Launch Workstation"),n.a.createElement("div",{className:"center-contents"},n.a.createElement("a",{href:"https://www.richychen.com/#/launch-workstation"},n.a.createElement("img",{style:{width:"10em",backgroundColor:"white"},src:"https://raw.githubusercontent.com/richychn/launch-workstation/master/public/icon128.png"}))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:I}}))}},{key:"renderMarketModeling",value:function(){return n.a.createElement("div",{className:"project"},n.a.createElement("h3",null,"Market Modeling"),n.a.createElement("div",{className:"center-contents"},n.a.createElement("a",{href:"http://market-modeling.herokuapp.com"},n.a.createElement("img",{style:{width:"20em"},src:"https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/square_logo.png"}))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}}),n.a.createElement("div",{className:"center-contents"},n.a.createElement("img",{style:{width:"20em"},src:"https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/step_2.gif"})))}},{key:"renderPhotoAlly",value:function(){return n.a.createElement("div",{className:"project"},n.a.createElement("h3",null,"Photo Ally"),n.a.createElement("div",{className:"center-contents"},n.a.createElement("a",{style:{marginRight:"1em"},href:"https://github.com/richychn/photo-ally"},n.a.createElement("img",{style:{width:"10em"},src:"https://raw.githubusercontent.com/richychn/photo-ally/master/good%20photo/Assets.xcassets/AppIcon.appiconset/1024.png"}))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}))}},{key:"renderGuitwise",value:function(){return n.a.createElement("div",{className:"project"},n.a.createElement("h3",null,"GuitWise"),n.a.createElement("a",{href:"http://guitwise.herokuapp.com"},n.a.createElement("img",{style:{width:"100%",margin:"20px 0",display:"block"},src:"/guitwise.gif"})),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:v}}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Projects"),this.renderLaunchWorkstation(),this.renderMarketModeling(),this.renderPhotoAlly(),this.renderGuitwise()))}}]),t}(n.a.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10+1);a.setState({spans:t})},a.state={spans:0},a.imageRef=n.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.object;return n.a.createElement("a",{target:"_blank",style:{gridRowEnd:"span ".concat(this.state.spans)},href:"".concat(e[1].link_url)},n.a.createElement("img",{ref:this.imageRef,alt:"Cover of ".concat(e[1].title),src:e[1].image_url}))}}]),t}(n.a.Component),j={0:{title:"Steve Jobs",image_url:"https://images-na.ssl-images-amazon.com/images/I/41EQKL0jMhL._SX325_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Steve-Jobs-Biography-Isaacson-2011-11-04/dp/B01K15BMIM/ref=sr_1_3?crid=OXAQCHC47JU5&dchild=1&keywords=steve+jobs+biography&qid=1584562600&s=books&sprefix=steve+jobs+bio%2Cstripbooks%2C204&sr=1-3"},1:{title:"Titan: The Life of John D. Rockefeller Sr.",image_url:"https://images-na.ssl-images-amazon.com/images/I/51fQkrcrWnL._SX364_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Titan-Life-John-Rockefeller-Sr/dp/0679438084/ref=sr_1_2?dchild=1&keywords=rockefeller+titan&qid=1584562679&s=books&sr=1-2"},2:{title:"Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",image_url:"https://images-na.ssl-images-amazon.com/images/I/51gufUMfXZL._SX328_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547"},3:{title:"The Snowball: Warren Buffett and the Business of Life",image_url:"https://images-na.ssl-images-amazon.com/images/I/51KVWaAP02L._SX328_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Snowball-Warren-Buffett-Business-Life/dp/0553384619"},4:{title:"The House of Morgan",image_url:"https://images-na.ssl-images-amazon.com/images/I/518k5q1%2BjFL._SX331_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/gp/product/0802144659/ref=dbs_a_def_rwt_bibl_vppi_i4"},5:{title:"Never Split the Difference",image_url:"https://images-na.ssl-images-amazon.com/images/I/51yKczFDuQL.jpg",link_url:"https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/B01COR1GM2/ref=sr_1_2?dchild=1&keywords=never+split+the+difference&qid=1584562374&sr=8-2"},6:{title:"Quiet",image_url:"https://images-na.ssl-images-amazon.com/images/I/71SLQKwNLBL.jpg",link_url:"https://www.amazon.com/Quiet-Power-Introverts-World-Talking/dp/B00714PZMQ/ref=sr_1_1?dchild=1&keywords=quiet&qid=1584562393&s=audible&sr=1-1"},7:{title:"Trillion Dollar Coach",image_url:"https://images-na.ssl-images-amazon.com/images/I/41vgassjrKL._SX329_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Trillion-Dollar-Coach-Leadership-Playbook/dp/0062839268"},8:{title:"The Ride of a Lifetime: Lessons Learned from 15 Years as the CEO of the Walt Disney Company",image_url:"https://images-na.ssl-images-amazon.com/images/I/41gr0fllE9L._SX327_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Ride-Lifetime-Lessons-Learned-Company/dp/0399592091"},9:{title:"Range: Why Generalists Triumph in a Specialized World",image_url:"https://images-na.ssl-images-amazon.com/images/I/41-nFxo5yTL._SX333_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484"}},O=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderGallery",value:function(){return Object.entries(j).reverse().map((function(e){return n.a.createElement(_,{object:e,key:e[0]})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Reading"),n.a.createElement("div",{className:"books gallery"},this.renderGallery()))}}]),t}(n.a.Component)),N={0:{title:"Bridging Digital and Physical Activity",date:"March 4, 2020",image_url:"https://1m9qrs2s997uox6846iotvmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/1-Copy.png",credit:"https://news.nike.com/news/nike-app-at-retail-shopping-experience",image_alt:"Nike App",description:"Shopping online and offline are distinct and separate activities today. That seems to be changing slowly as your mobile phone becomes a useful aid when you are in the store.",text:"<p>Last summer, when I met up with some friends in a sushi restaurant in Hong Kong, I sat confused while my friends picked up their phone and started ordering their food. As I was looking around for the menu, my friends had scanned the QR code on a receipt left by the waiter and found an online menu where they could start ordering food. I quickly realized what they had done and followed suit.</p>        <p>Everything else in that restaurant was more familiar. I waited for food. I ate and had to wave down a busy waiter to bring the bill. Then, I paid using a debit card, while my friends Venmo'd me their share of the bill. I forgot about this experience until I was listening to a podcast and heard about Nike's new app and retail experience.</p>        <p>I dug into it, and the video in <a href'https://news.nike.com/news/nike-app-at-retail-shopping-experience'>this article</a> describes many of the features. I want to highlight a couple: reserve and try on, and instant checkout.</p>        <p>Today, when I shop for clothes at most stores, I walk around the store, looking at mannequins and shelves until I find something I like. Then, I find a store clerk, wait until he or she is done helping another customer, and then ask where I can find the shirt on a mannequin or if a shoe in my size is available. I repeat this process a few times, each time getting embarrassed about having to bother the store clerk. My friend is a shopaholic and has already picked out what he wants online and is only here to try them on, so he has already asked a clerk and is waiting for the clerk to get back. After we decide on what to purchase, we join the long line at the counter, where I realize how short a time I can stand still, on both legs.</p>        <p>Nike's innovative app would help both my friend and I fight our impatience and cut down shopping time. When I see a shirt on a mannequin, I can scan the QR code attached, or if I see a shoe and can't find the right size, I can scan the barcode. Then, I can request it, and it will be delivered to a marked area or directly to the fitting room. My friend can reserve the shoes he wants to try from home and go to a locker in the store to pick it up. When we have everything we want, we can checkout in the app and leave the store. To me, this is a better experience than being helped by even the most cheerful store clerk.</p>        <p>Both the sushi restaurant and Nike remind me of how separated our digital and physical lives are. As I thought about this while travelling in India, I instinctively wished for an app to help me check in to my hotel, help me request a razor, and let me text the concierge about the airport bus. Mobile apps are over a decade old now, but we are only seeing the apps that bridge the virtual and physical more recently.</p>        <p>I daydream about walking into malls, hotels, shops, restaurants, cafes, and maybe even the DMV one day and be able to use my phone as a personal assistant. I find myself saying to my friends, \"I wish I could order food from my table in the food court\" and wishes for many other products/features that all seem technologically possible and even easy.</p>        <p>Which is why I am working with my friends to build a system of apps that will allow business owners (potentially of all the stores I mentioned and more) to better serve their customers. We are starting with cafes and restaurants, where we hope to replicate the service of the sushi restaurant in Hong Kong, and do one better by adding payment, requests, and discounts.</p>"},1:{title:"My Favorite Career Advice",date:"March 22, 2020",image_url:"",credit:"",image_alt:"",description:"My list of resources for thinking about your career and pursuing opportunities. This particular post will be continuously updated as I find better resources.",text:"<p>I am very lucky to be working at Hive for my first full time job. Coming into college, working at a startup was not on my mind. Throughout college, I changed career directions at least three times, despite being absolutely sure I was following a plan I laid out for myself. Now, as I think longer term and reflect on my job search process, I stumbled on interesting resources for thinking about your career and pursuing opportunities, which I wish I had viewed at the beginning of college.</p>        <h3>Career Planning</h3>        <ul>        <li><a href='https://www.youtube.com/watch?v=xmYekD6-PZ8'>Bill Gurley's Runnin' Down a Dream speech</a></li>        <p>After finding your passion, become the most knowledgable in it. You may not be the best or smartest at it, but anyone can become one of the most knowledgable in a field. This helps you find and talk to mentors at a high level. This also proves your passion to yourself, because you are doing some of the work to becoming better at your passion.</p>        <li><a href='https://pmarchive.com/guide_to_career_planning_part0.html'>Marc Andreessen's Guide to Career Planning</a></li>        <p>Ironically for me, Andreessen's first advice is 'don't plan your career.' Rather, recognize opportunities and think strategically about the risk of pursuing an opportunity in the 'portfolio' of all the jobs in your career.</p>        <p>Learn hard things in school, so that you are not easily fazed by difficult problems. Become top 25% in two or three skills. Some important skills are communication, management, sales, and finance. Pick an industry where the founders of the industry are still involved. For a rapidly changing industry like technology, find a young, fast growing company rather than a big, established one.</p>        <p>David Epstein's <i>Range</i> supports many of Andreessen's suggestions. Epstein argues that a more diverse experience and knowledge base can do better for ambiguous situations or problems. Specifically, scientists in multiple disciplines are able to solve seemingly impossible problems, and those who have worked abroad tend to have a greater scientific impact.</p>        </ul>        <h3>Pursuing Opportunities</h3>        <ul>        <li><a href='https://medium.com/@julesdwalt/networking-for-introverts-3544f4287fc1'>Jules Walter's Networking for Introverts</a></li>        <p>I entered college not knowing the word networking. Even in college, no one told me specifics. It seemed like all my peers were having wonderful, half hour to hour long conversations with all our alumni, but I could barely come up with enough questions to last 20 minutes. Walter's short piece gives very practical advice for what you can do, if you, like me, aren't the type to wow everyone around you with jokes and fun small talk. My two key takeaways is first, to start by asking for low commitment interactions, such as one very specific question, and second, as you ramp up these interactions, let them know how they have helped you and what you have done as a result of their advice.</p>        <li><a href='https://haseebq.com/tech-careers/'>Haseeb Qureshi's Blogs on Tech Careers</a></li>        <p>Qureshi dropped out of school to become a pro poker player, studied his ass off to become a software developer, and is now an investor in blockchain related companies. He wrote blogs at each step of the way and gives very specific advice on how to break into tech from an unconventional background and how to negotiate job offers.</p>        <p>I found negotiating incredibly difficult, even though I was reading <i>Never Split the Difference</i> and trying to incorporate its suggestions. Qureshi's two part blog on negotiation suggests 10 concrete steps you can take. My kep takeaways are always be positive, mention and internally hype up what you would do if you rejected the offer, and always say you need to discuss the offer with someone else. Read Qureshi's blogs for specific examples.</p>        </ul>"},2:{title:"Migrating My Software Stack",date:"April 24, 2020",image_url:"https://i2.wp.com/www.onmsft.com/wp-content/uploads/2019/07/microsoft365.jpg?w=992&ssl=1",credit:"https://www.onmsft.com/feature/whats-the-difference-between-office-365-and-microsoft-365",image_alt:"Microsoft 365",description:"With the launch of new features and products in Microsoft 365, I rethink my email accounts, photo backup, cloud usage, and more. This post describes my thoughts and instructions for migrating Google Photos and Keep.",text:"<p>When Microsoft announced they would include Plaid in Excel, I was ecstatic. This would allow me to build my own personal finance app tailored to me. I could never stick with Mint, but I desperately needed a way to monitor my spending and, in the future, my investments. I decided I would get a Microsoft 365 subscription (a family plan to save money). These thoughts of preparing for the future caused me to start thinking about how I would manage my files, photos, and email accounts after I leave school.</p>        <p>I'm becoming a bit of a Marie Kondo about the technology I use, so I did some research, came up with a simplified 'Software Stack,' and started migrating everything to my new stack. This blog post will detail some of my reasons for using this stack and how I migrated everything.</p>        <p>Before migration, I used:        <ul>        <li>Gmail and Google Drive for school</li>        <li>Hotmail for personal</li>        <li>Two free OneDrive accounts, one each for high school and college</li>        <li>A Google account for Google Keep, Photos, and Maps</li>        <li>A Google account for Chrome Developer</li>        <li>A Google account for my Android</li>        <li>Two Apple accounts for different devices</li>        </ul></p>        <p>After migration, I use or plan to use:        <ul>        <li>One Outlook email for email, Microsoft 365 (OneDrive, Office suite, and Outlook app), Google (Keep, Photos, Maps, Chrome, Drive)</li>        <li>One Apple account for Apple products</li>        <li>One work email through whichever service my work provides</li>        </ul></p>        <p>Some of my keys decisions during this migration process included choosing which email accounts to use and choosing an app to backup my photos. I wanted to use as few email accounts as possilbe, since I found it impossible to keep track of the numerous accounts I had before. Also, I did not want to use any of my old accounts, so that I could start anew and make sure I am not on any unwanted email lists. I decided not to use Gmail, the most popular among my friends, because I would not be able to use Microsoft 365 with that email. However, Google allows users to use any email for registering a Google account. Therefore, Outlook was the most sensible choice.</p>        <p>As for photos, I have been using Google Photos, which backs up my photos without me having to do anything. However, since I have been using OneDrive more, I considered using OneDrive to back up my photos. Doing some research into both products, I found that Google Photos beat out OneDrive in the number of features and the ability to store unlimited photos at a lower than original quality. Most important to me was Google Photos' ability to internally label faces and photos and let users search for specific people, locations, or things inside the photo. People who care enough about the quality of photos to pay for storage may want to reconsider.</p>        <p>After settling on Google Photos, I now had to move all my photos from one Google account to another (Remember my Outlook email can be used as a Google account).        <ol>        <li>Go to <a target='_blank' href='photos.google.com'>photos.google.com</a> and sign in using your old Google account.</li>        <li>Click the menu button and go to <a target='_blank' href='https://photos.google.com/u/0/managelibrary'>Manage Library</a></li>        <li>Add your new Google account as a partner account, making sure to share all photos.</li>        <li>Sign in to your new Google account.</li>        <li>Accept the invite, making sure to save all photos to your own photos</li>        <li>Wait, perhaps overnight. It will take some time for all the photos to be transferred.</li>        </ol></p>        <p>Next, I have to do a similar thing for Google Keep.        <ol>        <li>Go to <a target='_blank' href='keep.google.com'>keep.google.com</a> and sign in to your old account.</li>        <li>For each note, add your new account as a collaborator.</li>        <li>Sign in to your new account</li>        <li>Duplicate each of the notes that have been shared to this account, and delete the shared versions.</li>        </ol></p>        <p>This will not apply to a majority of people, but I also had to migrate Chrome Developer account's Chrome extension and my Google Domain account to my new Google account. For the Chrome extension, I had to pay another developer fee for my new account and then fill out a form <a target='_blank' href='https://support.google.com/chrome_webstore/contact/dev_account_transfer'>here</a>. Unfortunately, this migration takes a while, because a Google employee must look at it.</p>        <p>For the Google Domain:        <ol>        <li>Go to <a target='_blank' href='https://domains.google.com/m/registrar/transfer'>Transfer</a> in the Google Domains page.</li>        <li>Type in the domain(s) you want to transfer</li>        <li>Send the authorization code to the old account</li>        <li>Go to your old account's email and copy the authorization code</li>        <li>Click 'Continue to other account' and sign in with your new account</li>        <li>Select 'I already have an authorization code' and paste the authorization code</li>        </ol></p>        <p>I also considered migrating my Maps saved locations, but I could not find a simple way for doing so. Since my saved locations weren't very organized, I took this as an opportunity to start saving locations in a more organized manner with my new account. I chose not to migrate any of my old OneDrive files, because I would not be using them regularly, and I preferred to leave them as drives I can revisit to see what I did in high school and college.</p>        <p>That concludes my process of thinking of which software to use, how to simplify my technology life, and keep all my old photos, <a target='_blank' href='/#/launch-workstation'>my Chrome extension</a>, and my Keep notes. I hope this helps anyone looking to make the same simplifying journey I did.</p>"},3:{title:"Uses of Infinity: Avicenna and Descartes",date:"May 17, 2020",image_url:"",credit:"",image_alt:"",description:"As I graduate, I am sharing a piece of college writing and philosophical thinking I am most proud of.",text:"<p>Yesterday was meant to be the day I walked across a stage, received my diploma, and became a university graduate. Instead, I was at home, making food with my sister for my grandmother's birthday. For me, it was a much better alternative, if not for COVID-19 being the reason I am at home. However, it does mean I don't feel anything momentous. To personally celebrate my graduation, I am sharing a piece of writing and philosophical thinking I did during college. Although I didn't major in philosophy, it was a fascinating subject I only got to explore in college.</p>        <p>In this essay, I explore how Avicenna or Ibn Sina and Descartes use infinity in their respective arguments for an almighty figure or a God. Using Levey's essay on the Paradox of the PSR, I then construct a counterargument to both Avicenna and Descartes. Please feel free to contact me to talk about this. I love talking about philosophical arguments for and against God.</p>        <p>Please click <a href='/Infinity.pdf' target='_blank'>here</a> to read my essay. "}},C=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderCard",value:function(e){return n.a.createElement("div",{className:"blog-card"},n.a.createElement("div",{className:"blog-divider"}),n.a.createElement("h3",{className:"font"},e.title),n.a.createElement("p",null,e.description),n.a.createElement("p",null,e.date))}},{key:"renderGallery",value:function(){var e=this;return Object.entries(N).reverse().map((function(t){return n.a.createElement("a",{href:"/#blogs/".concat(t[0]),key:t[0]},e.renderCard(t[1]))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Blog"),n.a.createElement("div",{className:"description"},"Although I love to think and discuss philosophy, a product idea, or what the future might look like, I rarely have the patience to write it all down. This is something I want to work on, so I built a simple, minimalist blog site where I will hopefully write more."),n.a.createElement("div",{className:"blogs gallery"},this.renderGallery()))}}]),t}(n.a.Component)),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={title:N[a.props.match.params.id].title,date:N[a.props.match.params.id].date,image_url:N[a.props.match.params.id].image_url,credit:N[a.props.match.params.id].credit,image_alt:N[a.props.match.params.id].image_alt,text:N[a.props.match.params.id].text},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderImage",value:function(){return""===this.state.image_url?null:n.a.createElement("div",{className:"blog img"},n.a.createElement("img",{src:this.state.image_url,alt:this.state.image_alt}),n.a.createElement("div",{className:"credits"},"Image Credit: ",this.state.credit))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,this.state.title),this.renderImage(),n.a.createElement("p",{className:"blog date"},this.state.date),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.text}})))}}]),t}(n.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(e){var t=a.state.lastYpos;a.setState({lastYpos:window.pageYOffset}),0===window.pageYOffset?a.setState({header:!0}):window.pageYOffset>t?a.setState({header:!1}):window.pageYOffset<t&&a.setState({header:!0})},a.windowWidth=function(){window.innerWidth<800?a.setState({mobile:!0}):a.setState({mobile:!1})},a.sidebar=function(){return a.state.mobile?a.state.header?n.a.createElement(p,null):n.a.createElement(p,{hidden:"hidden"}):n.a.createElement(g,null)},a.state={mobile:!1,lastYpos:null,header:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.windowWidth(),window.addEventListener("resize",this.windowWidth),window.addEventListener("scroll",this.handleScroll,!0),this.setState({lastYpos:window.pageYOffset})}},{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"page ".concat(this.state.mobile?"mobile":"")},this.sidebar(),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",exact:!0,component:y}),n.a.createElement(u.a,{path:"/hello",exact:!0,component:y}),n.a.createElement(u.a,{path:"/projects",exact:!0,component:E}),n.a.createElement(u.a,{path:"/books",exact:!0,component:O}),n.a.createElement(u.a,{path:"/blogs",exact:!0,component:C}),n.a.createElement(u.a,{path:"/blogs/:id",exact:!0,component:M}),n.a.createElement(u.a,{path:"/launch-workstation",component:function(){return window.location.href="https://chrome.google.com/webstore/detail/launch-workstation/bonigddakfdagmgiodddmconddoebaoa",null}}))))}}]),t}(n.a.Component);r.a.render(n.a.createElement(S,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e483646a.chunk.js.map