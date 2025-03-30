<header>
<img src="img/logo.png" alt="Logo de Electrohogar">
<h1>🎉 ¡Bienvenid@ a Electro Hogar Online! 🎉</h1> <br>
<p>¡Estamos súper emocionados de tenerte con nosotros! 💥 Aquí encontrarás electrodomésticos, productos para el hogar, calzado, vestimenta y mucho más. 🏠👟👗<br>
<br>
💥 Productos de calidad a precios increíbles <br>
💬 Atención personalizada y rápida <br>
✅ ¡Verificación segura y rápida! <br>
<br>
🌟 ¡Déjanos ayudarte a encontrar lo que necesitas! Escribe tu consulta y nuestro equipo estará encantado de atenderte. ⚡</p>
<br>
</p>
<?php include 'boton_ws.php' ?>
</header>
<section>
  
<hr>
<div class="productos">
        <h1>PROMOCIONES</h1>
        <?php
            include 'productos.php'; // Incluye el archivo productos.php
            foreach ($productos as $producto) {
                echo '<div class="producto">';
                echo '<img src="' . $producto["imagen"] . '" alt="' . $producto["imagen"] . '">';
                echo '</div>';
            }
        ?>
    </div>
    <hr>
    <div class="videos">
    <h1>UBICACIONES</h1>
    <div class="video">
        <h2>POSADA DEL SOL Y LABORATORIOS DIVINA</h2>
        <video width="800" height="600" autoplay loop muted>
            <source src="img/divinaposada.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
        </video>
    </div>
    <div class="video">
        <h2>EL VIEJO - CHINANDEGA</h2>
        <video width="800" height="600" autoplay loop muted>
            <source src="img/elviejochinandega.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
        </video>
    </div>
</div>
   <?php include 'boton_ws.php' ?>
</section>