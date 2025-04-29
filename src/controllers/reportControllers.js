const PDFDocument = require("pdfkit");
const HeroModel = require("../models/heroModel");

const exportHeroPDF = async (req, res) => {
    try {
        const heroes = await HeroModel.getHeros();

        // Configurações do cabeçalho da resposta
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heroes.pdf");

        const doc = new PDFDocument({ margin: 50 });
        doc.pipe(res);

        // Título do relatório
        doc.fontSize(20).text("Relatório de Heróis", { align: "center", underline: true });
        doc.moveDown(2);

        // Cabeçalho da tabela
        doc.fontSize(12).font("Helvetica-Bold");
        doc.text("Id", 50, doc.y);
        doc.text("Nome do Herói", 100, doc.y);
        doc.text("Nome da Editora", 300, doc.y);
        doc.moveDown(0.5);

   
        heroes.forEach((hero) => {
            doc.fontSize(10).font("Helvetica");
            const currentY = doc.y; 
            doc.text(hero.id.toString(), 50, currentY); 
            doc.text(hero.hero_name, 100, currentY); 
            doc.text(hero.editor_name, 300, currentY); 
        });


        doc.moveDown(2);

        doc.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao gerar o PDF" });
    }
};

module.exports = { exportHeroPDF };