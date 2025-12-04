"""
Stack MCP Super Agents - Logo Generator
Protocol Flux Design Philosophy

Creates a sophisticated logo mark representing:
- MCP (Model Context Protocol) = interconnected nodes
- Stack = layered architecture
- Agents = intelligent energy flow
- Gradient: Violet #7C3AED → Orange #F97316
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import os

# Brand Colors
VIOLET = (124, 58, 237)  # #7C3AED
ORANGE = (249, 115, 22)  # #F97316
WHITE = (255, 255, 255)
DARK = (15, 23, 42)  # #0F172A

def interpolate_color(color1, color2, factor):
    """Smoothly interpolate between two colors"""
    return tuple(int(c1 + (c2 - c1) * factor) for c1, c2 in zip(color1, color2))

def create_gradient_circle(size, color1, color2, direction='diagonal'):
    """Create a circle with gradient fill"""
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))

    for y in range(size):
        for x in range(size):
            # Check if point is inside circle
            cx, cy = size // 2, size // 2
            radius = size // 2
            dist = math.sqrt((x - cx) ** 2 + (y - cy) ** 2)

            if dist <= radius:
                # Calculate gradient factor based on position
                if direction == 'diagonal':
                    factor = (x + y) / (2 * size)
                elif direction == 'horizontal':
                    factor = x / size
                else:
                    factor = y / size

                color = interpolate_color(color1, color2, factor)
                # Anti-aliasing at edges
                if dist > radius - 2:
                    alpha = int(255 * (radius - dist) / 2)
                else:
                    alpha = 255
                img.putpixel((x, y), (*color, alpha))

    return img

def create_rounded_rect(draw, xy, radius, fill, outline=None, width=0):
    """Draw a rounded rectangle"""
    x1, y1, x2, y2 = xy

    # Draw rectangles
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill)

    # Draw corners
    draw.ellipse([x1, y1, x1 + 2*radius, y1 + 2*radius], fill=fill)
    draw.ellipse([x2 - 2*radius, y1, x2, y1 + 2*radius], fill=fill)
    draw.ellipse([x1, y2 - 2*radius, x1 + 2*radius, y2], fill=fill)
    draw.ellipse([x2 - 2*radius, y2 - 2*radius, x2, y2], fill=fill)

def create_logo_mark(size=512):
    """
    Create the Stack MCP logo mark
    Design: Three stacked rounded squares with gradient,
    representing layered intelligence
    """
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Calculate dimensions
    padding = size * 0.1
    layer_size = size * 0.55
    layer_spacing = size * 0.12
    corner_radius = size * 0.08

    # Three layers: bottom (violet), middle (blend), top (orange)
    layers = [
        {'offset': (padding, padding + layer_spacing * 2), 'color': VIOLET, 'alpha': 180},
        {'offset': (padding + layer_spacing * 0.5, padding + layer_spacing), 'color': interpolate_color(VIOLET, ORANGE, 0.5), 'alpha': 200},
        {'offset': (padding + layer_spacing, padding), 'color': ORANGE, 'alpha': 255},
    ]

    # Draw layers from back to front
    for layer in layers:
        x, y = layer['offset']
        layer_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        layer_draw = ImageDraw.Draw(layer_img)

        # Create rounded rectangle with gradient effect
        for py in range(int(y), int(y + layer_size)):
            for px in range(int(x), int(x + layer_size)):
                # Check if inside rounded rect bounds
                in_rect = False

                # Main rectangle area
                if (x + corner_radius <= px <= x + layer_size - corner_radius and
                    y <= py <= y + layer_size):
                    in_rect = True
                elif (x <= px <= x + layer_size and
                      y + corner_radius <= py <= y + layer_size - corner_radius):
                    in_rect = True
                # Corner checks
                else:
                    corners = [
                        (x + corner_radius, y + corner_radius),
                        (x + layer_size - corner_radius, y + corner_radius),
                        (x + corner_radius, y + layer_size - corner_radius),
                        (x + layer_size - corner_radius, y + layer_size - corner_radius),
                    ]
                    for cx, cy in corners:
                        if math.sqrt((px - cx)**2 + (py - cy)**2) <= corner_radius:
                            in_rect = True
                            break

                if in_rect and 0 <= px < size and 0 <= py < size:
                    # Gradient within layer
                    factor = ((px - x) + (py - y)) / (2 * layer_size)
                    base_color = interpolate_color(VIOLET, ORANGE, factor * 0.3 + (1 - layers.index(layer) / len(layers)) * 0.7)
                    layer_img.putpixel((int(px), int(py)), (*base_color, layer['alpha']))

        # Composite layer onto main image
        img = Image.alpha_composite(img, layer_img)

    # Add a subtle lightning bolt or node connection in the center
    draw = ImageDraw.Draw(img)
    center_x = size * 0.5
    center_y = size * 0.45
    node_radius = size * 0.06

    # Draw central node (representing the "agent")
    for r in range(int(node_radius), 0, -1):
        factor = 1 - (r / node_radius)
        color = interpolate_color(VIOLET, WHITE, factor * 0.5)
        alpha = int(255 * (0.8 + factor * 0.2))
        draw.ellipse([
            center_x - r, center_y - r,
            center_x + r, center_y + r
        ], fill=(*color, alpha))

    return img

def create_favicon(logo, size):
    """Create favicon at specific size"""
    return logo.resize((size, size), Image.Resampling.LANCZOS)

def create_logo_with_text(logo_mark, text="Stack MCP", font_path=None):
    """Create full logo with text"""
    mark_size = logo_mark.size[0]

    # Create wider canvas for text
    width = int(mark_size * 2.5)
    height = mark_size

    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))

    # Place logo mark on the left
    img.paste(logo_mark, (0, 0), logo_mark)

    # Add text
    draw = ImageDraw.Draw(img)

    try:
        if font_path and os.path.exists(font_path):
            font = ImageFont.truetype(font_path, int(mark_size * 0.2))
        else:
            # Try common system fonts
            font_size = int(mark_size * 0.2)
            try:
                font = ImageFont.truetype("arial.ttf", font_size)
            except:
                font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()

    # Calculate text position (centered vertically, to the right of mark)
    text_x = mark_size * 1.1
    text_y = (height - font.size) // 2 if hasattr(font, 'size') else height * 0.4

    # Draw text with gradient effect (simplified - solid for reliability)
    draw.text((text_x, text_y), text, fill=VIOLET, font=font)

    return img

def main():
    # Create output directory
    output_dir = os.path.join(os.path.dirname(__file__), '..', 'public')
    os.makedirs(output_dir, exist_ok=True)

    print("Creating Stack MCP logo assets...")

    # Create main logo mark at high resolution
    print("  - Generating logo mark (512x512)...")
    logo_mark = create_logo_mark(512)
    logo_mark.save(os.path.join(output_dir, 'logo-mark.png'))

    # Create favicons at various sizes
    favicon_sizes = [16, 32, 48, 64, 128, 180, 192, 512]
    for size in favicon_sizes:
        print(f"  - Generating favicon ({size}x{size})...")
        favicon = create_favicon(logo_mark, size)
        favicon.save(os.path.join(output_dir, f'favicon-{size}.png'))

    # Create standard favicon.ico (multi-size)
    print("  - Generating favicon.ico...")
    ico_sizes = [create_favicon(logo_mark, s) for s in [16, 32, 48]]
    ico_sizes[0].save(
        os.path.join(output_dir, 'favicon.ico'),
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)]
    )

    # Create apple-touch-icon
    print("  - Generating apple-touch-icon...")
    apple_icon = create_favicon(logo_mark, 180)
    apple_icon.save(os.path.join(output_dir, 'apple-touch-icon.png'))

    # Create OG image (1200x630 with logo centered)
    print("  - Generating OG image (1200x630)...")
    og_img = Image.new('RGBA', (1200, 630), DARK)
    og_logo = create_favicon(logo_mark, 300)
    og_img.paste(og_logo, ((1200 - 300) // 2, (630 - 300) // 2), og_logo)
    og_img.save(os.path.join(output_dir, 'og-image.png'))

    print("\nLogo assets created successfully!")
    print(f"Output directory: {os.path.abspath(output_dir)}")
    print("\nFiles created:")
    print("  - logo-mark.png (512x512)")
    print("  - favicon.ico (16, 32, 48)")
    print("  - favicon-{16,32,48,64,128,180,192,512}.png")
    print("  - apple-touch-icon.png (180x180)")
    print("  - og-image.png (1200x630)")

if __name__ == "__main__":
    main()
