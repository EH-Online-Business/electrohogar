<?php
        $numero_whatsapp = "50582577821"; // Reemplaza con tu número
        $mensaje_whatsapp = "Hola, estoy interesado en las PROMOS de Electrohogar.";
        $enlace_whatsapp = "https://wa.me/{$numero_whatsapp}?text=" . urlencode($mensaje_whatsapp);
    ?>
    <a href="<?php echo $enlace_whatsapp; ?>" target="_blank">
        <button><i class="fab fa-whatsapp"></i>-- ¡Escríbenos! --<i class="fab fa-whatsapp"></i></button>
        
    </a>