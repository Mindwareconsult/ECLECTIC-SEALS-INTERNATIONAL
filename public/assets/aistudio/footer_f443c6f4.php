<?php
/**
 * The footer for the theme: footer columns, bottom bar, floating buttons.
 *
 * @package Eclectic_Seals
 */

$phone_1  = eclectic_seals_option( 'eclectic_seals_phone_1', '08027997172' );
$phone_2  = eclectic_seals_option( 'eclectic_seals_phone_2', '081600422514' );
$email    = eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' );
$address  = eclectic_seals_option( 'eclectic_seals_address', '11 Mungo Park Close, Asokoro, Abuja, Nigeria' );
$hours    = eclectic_seals_option( 'eclectic_seals_hours', 'Mon &ndash; Fri: 8am &ndash; 5pm<br>Sat: 9am &ndash; 2pm &nbsp;|&nbsp; Sun: Closed' );
$facebook = eclectic_seals_option( 'eclectic_seals_facebook', 'https://www.facebook.com/share/1JaoMTg6S8/' );

$phone_1_tel = preg_replace( '/[^0-9+]/', '', '+234' . ltrim( $phone_1, '0' ) );
$phone_2_tel = preg_replace( '/[^0-9+]/', '', '+234' . ltrim( $phone_2, '0' ) );
$whatsapp    = preg_replace( '/[^0-9]/', '', '234' . ltrim( $phone_1, '0' ) );
?>
<footer class="footer">
  <svg class="footer-lines" viewBox="0 0 1400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M0 350 L200 350 L200 200 L500 200 L500 350 L800 350 L800 100 L1100 100 L1100 350 L1400 350" stroke="#F5810D" stroke-width="1" fill="none"/>
<circle cx="200" cy="200" r="6" fill="none" stroke="#F5810D"/>
<circle cx="800" cy="100" r="6" fill="none" stroke="#F5810D"/>
</svg>
  <div class="container footer-top">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img class="seal-mark" src="<?php echo eclectic_seals_image( 'logo-icon.png' ); ?>" alt="<?php bloginfo( 'name' ); ?> logo mark" loading="lazy">
          <?php echo eclectic_seals_brand_name(); ?>
        </div>
        <p><?php echo esc_html( get_bloginfo( 'description' ) ? get_bloginfo( 'description' ) : "A premium design, construction and property solutions company based in Abuja, delivering interiors, buildings, and landscapes crafted for a lifetime." ); ?></p>
        <a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" class="btn btn-outline btn-sm" style="margin-top:12px;">Start a Project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>

      <div>
        <h4>Quick Links</h4>
        <?php if ( has_nav_menu( 'footer' ) ) : ?>
          <ul>
            <?php
            wp_nav_menu(
				array(
					'theme_location' => 'footer',
					'container'      => false,
					'items_wrap'     => '%3$s',
					'depth'          => 1,
				)
			);
			?>
          </ul>
        <?php else : ?>
          <ul>
            <li><a href="<?php echo esc_url( home_url( '/why-us/' ) ); ?>">Why Choose Us</a></li>
            <li><a href="<?php echo esc_url( home_url( '/testimonials/' ) ); ?>">Testimonials</a></li>
            <li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
            <li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>">FAQ</a></li>
            <li><a href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>">Request a Quote</a></li>
            <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact Us</a></li>
          </ul>
        <?php endif; ?>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li><?php echo wp_kses_post( $address ); ?></li>
          <li><a href="tel:<?php echo esc_attr( $phone_1_tel ); ?>"><?php echo esc_html( $phone_1 ); ?></a></li>
          <li><a href="tel:<?php echo esc_attr( $phone_2_tel ); ?>"><?php echo esc_html( $phone_2 ); ?></a></li>
          <li><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></li>
        </ul>
        <div class="footer-social">
          <?php if ( $facebook ) : ?>
          <a href="<?php echo esc_url( $facebook ); ?>" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a>
          <?php endif; ?>
        </div>
      </div>

      <div>
        <h4>Newsletter</h4>
        <p style="font-size:13px;">Design insights &amp; project updates, monthly.</p>
        <form class="newsletter-mini" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
          <input type="hidden" name="action" value="eclectic_seals_newsletter">
          <input type="email" name="newsletter_email" placeholder="Your email" aria-label="Email address" required>
          <button class="btn btn-sm" type="submit">Join</button>
        </form>
        <h4 style="margin-top:22px;">Working Hours</h4>
        <p style="font-size:13px; margin:0;"><?php echo wp_kses_post( $hours ); ?></p>
        <?php if ( is_active_sidebar( 'footer-extra' ) ) : ?>
          <div class="footer-extra"><?php dynamic_sidebar( 'footer-extra' ); ?></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <div>&copy; <span data-year><?php echo esc_html( gmdate( 'Y' ) ); ?></span> <?php bloginfo( 'name' ); ?>. All Rights Reserved.</div>
    <div class="footer-bottom-links">
      <?php if ( has_nav_menu( 'legal' ) ) : ?>
        <?php
        wp_nav_menu(
			array(
				'theme_location' => 'legal',
				'container'      => false,
				'items_wrap'     => '%3$s',
				'depth'          => 1,
			)
		);
		?>
      <?php else : ?>
        <a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>">Privacy Policy</a>
        <a href="<?php echo esc_url( home_url( '/terms-conditions/' ) ); ?>">Terms &amp; Conditions</a>
      <?php endif; ?>
    </div>
    <div class="footer-credit" style="font-size:12.5px; opacity:0.6; width:100%; text-align:center;">Website Designed by Mindware Consulting Ltd</div>
  </div>
</footer>

<div class="float-stack">
  <button class="back-to-top" aria-label="Back to top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
  <a class="float-btn float-quote" href="<?php echo esc_url( home_url( '/request-quote/' ) ); ?>" aria-label="Request a quote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h4l2-4V8H4v8zM14 20h4l2-4V8h-6v8z"/></svg></a>
  <a class="float-btn float-call" href="tel:<?php echo esc_attr( $phone_1_tel ); ?>" aria-label="Call us"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2.1.6 3.1.7a2 2 0 0 1 1.6 2z"/></svg></a>
  <a class="float-btn float-whatsapp" href="https://wa.me/<?php echo esc_attr( $whatsapp ); ?>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.3 7.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg></a>
</div>

<div class="lightbox" id="project-lightbox" aria-hidden="true">
    <button type="button" class="lightbox-close" aria-label="Close gallery">&times;</button>
    <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">&larr;</button>
    <div class="lightbox-stage">
      <img id="lightbox-img" src="" alt="">
      <div class="lightbox-caption">
        <h3 id="lightbox-title"></h3>
        <span id="lightbox-counter"></span>
      </div>
    </div>
    <button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">&rarr;</button>
    <div class="lightbox-thumbs" id="lightbox-thumbs"></div>
  </div>

<?php wp_footer(); ?>
</body>
</html>
