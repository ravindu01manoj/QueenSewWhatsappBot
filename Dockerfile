FROM fusuf/whatsasena:latest

RUN git clone https://ravindu01manoj:rgmscmF2aW5kdW1hbm9qc2V3@github.com/ravindu01manoj/QueenSewWhatsappBot /root/QueenSewWhatsappBot
WORKDIR /root/QueenSewWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
