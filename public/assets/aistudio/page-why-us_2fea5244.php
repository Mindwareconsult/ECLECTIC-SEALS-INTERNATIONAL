<?php
/**
 * Template Name: Why Choose Us Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_why.jpg',
		'breadcrumb' => 'Why Choose Us',
		'eyebrow'    => 'Our Promise',
		'title'      => 'Why Homeowners &amp; Businesses Trust Eclectic Seals Int&rsquo;l',
		'lead'       => 'Our commitment to excellence, quality, innovation, and customer satisfaction has earned us the trust of clients across residential, commercial, and institutional sectors.',
		'buttons'    => array(
			array( 'label' => 'Our Projects', 'url' => home_url( '/projects/' ), 'style' => 'primary' ),
			array( 'label' => 'Request Consultation', 'url' => home_url( '/request-quote/' ), 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Our Promise</div><h2>What We Commit To On Every Project</h2></div>
  <div class="grid-3 stagger">
    <?php
    $commitments = array(
			array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'Quality Workmanship', 'text' => 'Every finish is executed to a standard we would accept in our own homes.' ),
			array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Transparent Communication', 'text' => 'You will always know the status, cost, and timeline of your project.' ),
			array( 'icon' => 'M4 4h16v16H4zM4 9h16M9 9v11', 'title' => 'Innovative Design', 'text' => 'Concepts tailored to your brief, not recycled from a catalogue.' ),
			array( 'icon' => 'M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13', 'title' => 'Premium Materials', 'text' => 'Sourced or manufactured in-house for consistent quality.' ),
			array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'On-Time Delivery', 'text' => 'Schedules tracked weekly with proactive updates.' ),
			array( 'icon' => 'M9 12h6M12 9v6', 'circle' => true, 'title' => 'Long-Term Value', 'text' => 'Built to perform and hold its value for decades, not just at handover.' ),
		);
		foreach ( $commitments as $i => $item ) :
		?>
    <div class="card reveal" style="--i:<?php echo (int) $i; ?>"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $item['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $item['icon'] ); ?>"/></svg></div><h3 style="font-size:18px;"><?php echo esc_html( $item['title'] ); ?></h3><p style="margin:0;"><?php echo esc_html( $item['text'] ); ?></p></div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section section--light"><div class="container split">
    <div class="split-media reveal-left"><img src="<?php echo eclectic_seals_image( 'why_split.jpg' ); ?>" alt="Detail of premium finishing on an <?php bloginfo( 'name' ); ?> project" loading="lazy"></div>
    <div class="reveal-right">
      <div class="eyebrow">What Makes Us Different</div>
      <h2>Attention To Detail, From Planning To Handover</h2>
      <p style="color:#5b6370;">We pair skilled professionals with genuine client collaboration, modern project management tools, and rigorous quality control at every stage. That combination is what allows us to deliver consistently, project after project, regardless of scale.</p>
      <ul style="margin-top:16px;">
        <?php
        $points = array(
				'Attention to detail in every specification',
				'Skilled, vetted professionals on every site',
				'Close client collaboration throughout',
				'Structured project management',
				'Modern equipment and technology',
				'Independent quality control checkpoints',
			);
			foreach ( $points as $point ) :
			?>
        <li style="padding:8px 0; color:#5b6370;">&bull; <?php echo esc_html( $point ); ?></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div></section>

<section class="section section--dark"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Standards</div><h2>Quality Assurance At Every Stage</h2><p>We treat quality control as a checkpoint system, not an afterthought &mdash; every stage of a project is reviewed before the next begins.</p></div>
  <div class="process-track">
    <?php foreach ( array( 'Planning', 'Inspection', 'Testing', 'Approval', 'Delivery' ) as $i => $stage ) : ?>
    <div class="process-step reveal-scale" style="--i:<?php echo (int) ( $i + 1 ); ?>"><div class="seal"><span><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span></div><h4><?php echo esc_html( $stage ); ?></h4></div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Values</div><h2>Company Values</h2></div>
  <div class="grid-4 stagger">
    <?php
    $company_values = array(
			array( 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'Integrity' ),
			array( 'M4 4h16v16H4zM4 9h16M9 9v11', 'Innovation' ),
			array( 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'Professionalism' ),
			array( 'M12 7v5l3 3', 'Reliability', true ),
			array( 'M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z', 'Excellence' ),
			array( 'M20 6 9 17l-5-5', 'Safety' ),
			array( 'M9 12h6M12 9v6', 'Customer First', true ),
		);
		foreach ( $company_values as $i => $value ) :
		?>
    <div class="card reveal text-center" style="--i:<?php echo (int) $i; ?>"><div class="icon" style="margin:0 auto 18px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $value[2] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $value[0] ); ?>"/></svg></div><h3 style="font-size:17px; margin:0;"><?php echo esc_html( $value[1] ); ?></h3></div>
    <?php endforeach; ?>
  </div>
</div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Experience Construction Without Compromise',
		'text'    => 'Talk to our experts about your project today.',
		'buttons' => array(
			array( 'label' => 'Get Started', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Talk To Our Experts', 'url' => home_url( '/contact/' ), 'style' => 'outline' ),
		),
	)
);

get_footer();
