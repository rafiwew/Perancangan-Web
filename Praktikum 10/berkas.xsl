<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"></xsl:output>
    <xsl:template match="/">
        <note>
            <to>Tony</to>
            <from>Jani</from>
            <heading>Reminder</heading>
            <body>
                Don't forget me this weekend!
            </body>
        </note>
    </xsl:template>
</xsl:stylesheet>